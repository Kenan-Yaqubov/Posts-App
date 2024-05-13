import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPosts,
  togglePostsLoading,
  setCreatePost,
} from "./redux/slices/postSlice";
import Post from "./Post";
import Spinner from "./Spinner";

function Posts() {
  const { posts, postsLoading, postCreated } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(togglePostsLoading());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
        localStorage.setItem("allPosts", JSON.stringify(posts));
        dispatch(togglePostsLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(togglePostsLoading());
      });
  }, [dispatch]);

  const createPost = () => {};

  return (
    <div className="postsContainer">
      {postsLoading ? (
        <Spinner />
      ) : posts.length ? (
        posts.map((post) => <Post data={post} key={post.id} />)
      ) : (
        "Empty..."
      )}
      <button onClick={dispatch(setCreatePost(true))}>Create Post</button>;
      {postCreated ? (
        <>
          <input type="text" />
          <button onClick={createPost}>Create</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Posts;
