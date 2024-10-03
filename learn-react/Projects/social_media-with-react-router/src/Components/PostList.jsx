import { useContext } from "react";
import Posts from "./Post";
import { PostListContext } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, loading } = useContext(PostListContext);

  return (
    <>
      {loading && <Loading />}
      {!loading && postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        !loading &&
        postList.map((post) => (
          <Posts
            key={post.title}
            title={post.title}
            body={post.body}
            reactions={post.reactions}
            tags={post.tags}
            id={post.id}
          />
        ))
      )}
    </>
  );
};

export default PostList;
