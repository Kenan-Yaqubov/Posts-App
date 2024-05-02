import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  let [currentUser, setCurrentUser] = useState();
  let [userPosts, setUserPosts] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setCurrentUser(data))
        .catch(err => console.log(err));
    }
  }, [id]);

  useEffect(() => {
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
          const userPosts = data.filter(post => post.userId === parseInt(id));
          setUserPosts(userPosts);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  return (
    <div>
      {currentUser ? (
        <>
          <p><b>User name: </b>{currentUser.username}</p>
          <p><b>Name: </b>{currentUser.name}</p>
          <p><b>Email: </b>{currentUser.email}</p>
        </>
      ) : "Loading user details..."}

      {userPosts ? userPosts.map(post => (
        <Link to={`/posts/${post.userId}`} key={post.id} className="post">
          <div className="name"><b>Title: </b>{post.title}</div>
        </Link>
      )) : "Loading posts..."}
    </div>
  );
}

export default UserDetails;
