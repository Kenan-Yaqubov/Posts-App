import { useContext, useEffect, useState } from "react";
import User from "./User";
import MyContext from "./MyContext";
import "./User.css";
import Spinner from "./Spinner";

function Users() {
  let { users, setUsers, usersLoading, setUsersLoading } =
    useContext(MyContext);

  useEffect(() => {
    setUsersLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setUsersLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUsersLoading(true);
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
