/* eslint-disable react/display-name */
import { coreContent } from '@/lib/utils/contentlayer';
import type { Authors, Blog } from 'contentlayer/generated';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from './Image';
import CustomLink from './Link';
import LinkButton from './LinkButton';

interface MDXLayout {
  content: Blog | Authors;
  [key: string]: unknown;
}

export const components: MDXComponents = {
  Image,
  a: CustomLink,
  LinkButton,
};

export const MDXLayoutRenderer = ({ content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout content={mainContent} components={components} {...rest} />;
};
