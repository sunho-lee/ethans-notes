import { Post } from "contentlayer/generated";
import { H4 } from "../typo/heading";
import { Paragraph } from "../typo/paragraphs";

export default function PostCard(post: Post) {
  return (
    <div className="w-full p-4 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-white rounded-lg dark:bg-gray-800">
        <H4>{post.title}</H4>
        <div className="pt-2" />
        <Paragraph>{post.description}</Paragraph>
      </div>
    </div>
  );
}