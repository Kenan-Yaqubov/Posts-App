import { useContext, useEffect, useState } from "react";
import User from "./User";
import MyContext from "./MyContext";
import { setUsers, toggleUserLoading } from "./redux/slices/usersSlice";
import "./User.css";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  // let { users, setUsers, usersLoading, setUsersLoading } =
  //   useContext(MyContext);
  const { users, usersLoading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleUserLoading());
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
        dispatch(toggleUserLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(toggleUserLoading());
      });
  }, []);

  return (
    <div className="usersContainer">
      {usersLoading ? (
        <Spinner />
      ) : users.length ? (
        users.map((user) => <User data={user} key={user.id}></User>)
      ) : (
        "Empty..."
      )}
    </div>
  );
}

export default Users;
