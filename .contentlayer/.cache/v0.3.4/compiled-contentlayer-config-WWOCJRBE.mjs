// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

// lib/remark-code-title.ts
import { visit } from "unist-util-visit";
function remarkCodeTitles() {
  return (tree) => visit(tree, "code", (node, index, parent) => {
    const nodeLang = node.lang || "";
    let language = "";
    let title = "";
    if (nodeLang.includes(":")) {
      language = nodeLang.slice(0, nodeLang.search(":"));
      title = nodeLang.slice(nodeLang.search(":") + 1, nodeLang.length);
    }
    if (!title) {
      return;
    }
    const className = "remark-code-title";
    const titleNode = {
      type: "mdxJsxFlowElement",
      name: "div",
      attributes: [{ type: "mdxJsxAttribute", name: "className", value: className }],
      children: [{ type: "text", value: title }],
      data: { _xdmExplicitJsx: true }
    };
    parent.children.splice(index, 0, titleNode);
    node.lang = language;
  });
}

// lib/remark-toc-headings.ts
import slugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";
import { visit as visit2 } from "unist-util-visit";
function remarkTocHeadings() {
  return (tree, file) => {
    const toc = [];
    visit2(tree, "heading", (node) => {
      const textContent = toString(node);
      toc.push({
        value: textContent,
        url: "#" + slugger.slug(textContent),
        depth: node.depth
      });
    });
    file.data.toc = toc;
  };
}
async function extractTocHeadings(markdown) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  return vfile.data.toc;
}

// contentlayer.config.ts
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  },
  toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    images: { type: "list", of: { type: "string" } },
    author: { type: "string", required: true },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" }
  },
  computedFields
}));
var Authors = defineDocumentType(() => ({
  name: "Authors",
  filePathPattern: "authors/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    occupation: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    twitter: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    layout: { type: "string" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypePrismPlus, { ignoreMissing: true }]]
  }
});
export {
  Authors,
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WWOCJRBE.mjs.map
