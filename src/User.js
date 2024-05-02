import { Link } from "react-router-dom";
import "./User.css";

function User(props) {
  let { data } = props;
  return (
    <>
      <Link to={`${data.id}`} className="user">
        <div className="userName">{data.username}</div>
      </Link>

    </>
  );
}

export default User;
