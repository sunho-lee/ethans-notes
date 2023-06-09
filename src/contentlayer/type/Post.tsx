import { defineDocumentType } from "contentlayer/source-files";
import readingTime, { ReadTimeResults } from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "포스트 설명",
    },
    publishedAt: {
      type: "date",
      description: "발행일",
      required: true,
    },
    isPublished: {
      type: "boolean",
      description: "발행 여부",
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc): ReadTimeResults => readingTime(doc.body.raw),
    },
  },
}));
