import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/post-list-store";

const Posts = ({ title, body, reactions, tags, id }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <center>
      <div className="card postCard" style={{ width: "30rem" }}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(id)}
        >
          {<MdDelete />}
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {tags.map((tag, index) => (
            <span key={index} className="tags">{`#${tag}`}</span>
          ))}
          <p className="card-text">{body}</p>
        </div>
        <div className="alert alert-success reactions" role="alert">
          {`${reactions} people reacted to this post`}
        </div>
      </div>
    </center>
  );
};

export default Posts;
