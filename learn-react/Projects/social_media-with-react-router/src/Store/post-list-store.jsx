import { createContext, useEffect, useReducer, useState } from "react";
import { postListReducer } from "./postListReducer";

export const PostListContext = createContext({
  postList: [],
  loading: false,
  addPost: () => {},
  deletePost: () => {},
});

const CreatePostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
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
  const addPost = (post) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: post,
    };

    dispatchPostList(addPostAction);
  };

  const seeAllPosts = (posts) => {
    const seeAllPostAction = {
      type: "SEE_ALL_POST",
      payload: {
        posts: posts,
      },
    };

    dispatchPostList(seeAllPostAction);
  };

  const deletePost = (id) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id: id,
      },
    };

    dispatchPostList(deletePostAction);
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, loading, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default CreatePostListContextProvider;
