import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";

function PostBodyRendering() {
  let [currentPost, setCurrentPost] = useState();

  const { id } = useParams();
  useEffect(() => {
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentPost(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);


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
