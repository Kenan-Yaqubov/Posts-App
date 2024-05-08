import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import "./Post.css";
import Spinner from "./Spinner";
import MyContext from "./MyContext";

function Posts() {
let {posts, postsLoading, setPosts, setPostsLoading} = useContext(MyContext)

  useEffect(() => {
    setPostsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setPostsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPostsLoading(true);
      });
  }, []);

  return (
    <div className="postsContainer">
      {postsLoading ? (
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
