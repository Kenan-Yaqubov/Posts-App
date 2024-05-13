import { useEffect, useState } from "react";
import {
  setCurrentUser,
  setUserPosts,
  setUserPostsLoading,
  setCurrentUserLoading,
} from "./redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  // let [currentUser, setCurrentUser] = useState();
  // let [userPosts, setUserPosts] = useState();

  const { currentUser, userPosts, currentUserLoading, userPostsLoading } = useSelector((state) => state.userReducer);
  const { name, username, email } = currentUser || {};
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (isFinite(id)) {
      dispatch(setCurrentUserLoading());
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setCurrentUser(data));
          dispatch(setCurrentUserLoading());
        })
        .catch((err) => {
          console.log(err);
          dispatch(setCurrentUserLoading());
        });
    }
  }, [id]);

  useEffect(() => {
    dispatch(setUserPostsLoading());
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(
            setUserPosts(data.filter((post) => post.userId === parseInt(id)))
          );
          dispatch(setUserPostsLoading());
        })
        .catch((error) => {
          console.error(error);
          dispatch(setUserPostsLoading());
        });
    }
  }, [id]);

  return (
    <div>
      {currentUserLoading ? (
        <Spinner />
      ) : currentUser ? (
        <>
          <p>
            <b>User name: </b>
            {username || "No username"}
          </p>
          <p>
            <b>Name: </b>
            {name || "No name"}
          </p>
          <p>
            <b>Email: </b>
            {email || "No email"}
          </p>
        </>
      ) : (
        "No user details..."
      )}

      {userPostsLoading ? (
        <Spinner />
      ) : userPosts ? (
        userPosts.map((post) => (
          <Link to={`/posts/${post.userId}`} key={post.id} className="post">
            <div className="name">
              <b>Title: </b>
              {post.title}
            </div>
          </Link>
        ))
      ) : (
        "No Posts..."
      )}
    </div>
  );
}

export default UserDetails;
