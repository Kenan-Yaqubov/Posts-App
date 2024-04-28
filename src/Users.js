import { useEffect, useState } from "react";
import User from "./User";
import "./User.css";
import Spinner from "./Spinner";

function Users() {
  let [users, setUsers] = useState([]);
  let [loading, setLodaing] = useState(false);

  useEffect(() => {
    setLodaing(true);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLodaing(false);
      })
      .catch((err) => {
        console.log(err);
        setLodaing(true);
      });
  }, []);

  return (
    <div className="usersContainer">
      {loading ? (
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
