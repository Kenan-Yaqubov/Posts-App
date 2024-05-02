import { useEffect, useState } from "react";
import './Comments.css'

function Comments({ postID }) {
  const [currentComments, setCurrentComments] = useState([]);

  const numPostId = Number(postID);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((data) => {
        const filteredComments = data.filter(comment => comment.postId === numPostId);
        setCurrentComments(filteredComments); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postID]);

  return (
    <div className="commentsContainer">
      {currentComments ? (
        currentComments.map((comment) => (
            <p>{comment.body}</p>
        ))
      ) : (
        <p>No comments...</p>
      )}
    </div>
  );
}

export default Comments;
