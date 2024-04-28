import { useEffect, useState } from "react";
import Post from "./Post";
import "./Post.css";
import Spinner from "./Spinner";

function Posts() {
  let [posts, setPosts] = useState([]);
  let [loading, setLodaing] = useState(false);

  useEffect(() => {
    setLodaing(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLodaing(false);
      })
      .catch((err) => {
        console.log(err);
        setLodaing(true);
      });
  }, []);

  return (
    <div className="postsContainer">
      {loading ? (
        <Spinner />
      ) : posts.length ? (
        posts.map((post) => <Post data={post} key={post.id}></Post>)
      ) : (
        "Empty..."
      )}
    </div>
  );
}

export default Posts;
