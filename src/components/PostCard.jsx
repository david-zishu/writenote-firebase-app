import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const PostCard = ({ post, toggle, setToggle }) => {
  const { id, title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const navigate = useNavigate();

  const handleDelete = async () => {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle(!toggle);
  };

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="control">
        <span className="author">{author?.name}</span>
        {isAuth && author?.id === auth.currentUser.uid && (
          <p>
            <span
              className="edit"
              style={{ margin: "0 15px" }}
              onClick={() => navigate(`/update/${id}`)}
            >
              <i className="bi bi-pencil-square"></i>
            </span>
            <span className="delete" onClick={handleDelete}>
              <i className="bi bi-trash3"></i>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
