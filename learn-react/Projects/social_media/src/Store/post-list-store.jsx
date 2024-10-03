import { createContext, useReducer } from "react";
import { postListReducer } from "./postListReducer";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const CreatePostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    };

    dispatchPostList(addPostAction);
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
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default CreatePostListContextProvider;
