import { useEffect, useRef, useState } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import useTitle from "../hooks/useTitle";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  useTitle("Home");
  const postRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      const result = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(result);
    }
    console.log("---");
    getPosts();
  }, [postRef, toggle]);

  return (
    <section>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </section>
  );
};

export default Home;
