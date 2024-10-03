import { useContext, useRef } from "react";
import { PostListContext } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, title, body, reactions, tags);

    clearInput();
  };

  const clearInput = () => {
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form onSubmit={formHandler} className="create-post-form">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter UserId
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter user id"
          id="userId"
          ref={userIdElement}
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter post title"
          id="exampleInputEmail1"
          ref={titleElement}
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={bodyElement}
          placeholder="Story"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Tags
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          placeholder="Enter Tags"
          id="tags"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number reactions
        </label>
        <input
          type="number"
          className="form-control"
          ref={reactionsElement}
          placeholder="Number Of Reactions"
          id="tags"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
