// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Authors = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Authors'
  name: string
  avatar?: string | undefined
  occupation?: string | undefined
  company?: string | undefined
  email?: string | undefined
  twitter?: string | undefined
  linkedin?: string | undefined
  github?: string | undefined
  layout?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  toc: string
}

export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  title: string
  date: IsoDateTimeString
  tags?: string[] | undefined
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  images?: string[] | undefined
  author: string
  layout?: string | undefined
  bibliography?: string | undefined
  canonicalUrl?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  toc: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Authors | Blog
export type DocumentTypeNames = 'Authors' | 'Blog'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allBlogs: Blog[]
  allAuthors: Authors[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Authors: Authors
  Blog: Blog
}

export type NestedTypeMap = {

}

 