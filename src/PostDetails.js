import { useEffect, useState } from "react";
import { setCurrentPost } from "./redux/slices/postSlice";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";

function PostBodyRendering() {
  // let [currentPost, setCurrentPost] = useState();
  const { currentPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setCurrentPost(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, id]);


  return (
    <div>
      {currentPost ? (
        <>
          <Link to={`/users/${currentPost.userId}`} key={currentPost.id}>
            <p>
              <b>Title: </b>
              {currentPost.title}
            </p>
          </Link>
          <p>
            <b>Body: </b>
            {currentPost.body}
          </p>
          <Comments postID={id} />
        </>
      ) : (
        "empty..."
      )}
    </div>
  );
}

export default PostBodyRendering;
