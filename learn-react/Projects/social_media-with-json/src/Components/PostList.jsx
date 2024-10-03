import { useContext, useEffect, useState } from "react";
import Posts from "./Post";
import { PostListContext } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import axios from "axios";
import Loading from "./Loading";

const PostList = () => {
  const { postList, seeAllPosts } = useContext(PostListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        seeAllPosts(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        !loading &&
        postList.map((post) => (
          <Posts
            key={post.id}
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
