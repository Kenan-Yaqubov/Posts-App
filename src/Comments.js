import { useContext, useEffect, useState } from "react";
import MyContext from "./MyContext";
import './Comments.css'

function Comments({ postID }) {
  let {comments, setComments}  = useContext(MyContext)
  const numPostId = Number(postID);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((data) => {
        const filteredComments = data.filter(comment => comment.postId === numPostId);
        setComments(filteredComments); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postID]);

  return (
    <div className="commentsContainer">
      {comments ? (
        comments.map((comment) => (
            <p>{comment.body}</p>
        ))
      ) : (
        <p>No comments...</p>
      )}
    </div>
  );
}

export default Comments;
