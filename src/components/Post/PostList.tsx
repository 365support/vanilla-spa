/* @jsx createElement */
import { createElement } from "../../render";
import { PostCard } from "./PostCard";

export const PostsList = ({ posts }: any) => {
  return (
    <ul>
      {posts?.map((post: any) => {
        return (
          <li key={post.key}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};
