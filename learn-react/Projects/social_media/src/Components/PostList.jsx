import { useContext } from "react";
import Posts from "./Post";
import { PostListContext } from "../Store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Posts
          key={post.id}
          title={post.title}
          body={post.body}
          reactions={post.reactions}
          tags={post.tags}
          id={post.id}
        />
      ))}
    </>
  );
};

export default PostList;
