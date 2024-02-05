import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const CreatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  useTitle("Create Post");
  const [description, setDescription] = useState("");
  const postRef = id ? doc(db, "posts", id) : collection(db, "posts");
  const navigate = useNavigate();

  useEffect(() => {
    id && getSinglePost();
  }, [id]);

  const getSinglePost = async () => {
    const docRef = doc(db, "posts", id);
    const snapDoc = await getDoc(docRef);
    if (snapDoc.exists()) {
      setTitle(snapDoc.data().title);
      setDescription(snapDoc.data().description);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        await addDoc(postRef, {
          title,
          description,
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await updateDoc(postRef, {
          title,
          description,
        });
      } catch (err) {
        console.log(err);
      }
    }
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <section className="create">
      <div className="heading">
        <h1>{id ? "Update Post" : "Add New Post"}</h1>
      </div>
      <form className="createPost" onSubmit={handleSubmit}>
        <input
          type="text"
          className="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title Of the Post"
          maxLength="50"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description"
          placeholder="Description Of the Post"
          maxLength="600"
          required
        />
        <button type="submit" className="submit">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
