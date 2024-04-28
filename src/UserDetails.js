import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  let [currentUser, setCurrentUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    if (isFinite(id)) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      {currentUser ? (
        <>
          <p><b>User name: </b>{currentUser.username}</p>
          <p><b>Name: </b>{currentUser.name}</p>
          <p><b>Email: </b>{currentUser.email}</p>
        </>
      ) : (
        "empty..."
      )}
    </div>
  );
}

export default UserDetails;
