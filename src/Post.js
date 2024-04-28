import { Link } from "react-router-dom";
import "./Post.css";

function Post(props) {
  let { data } = props;
  return (
    <Link to={`${data.id}`} className="post">
      <div className="name"><b>Title: </b>{data.title}</div>
    </Link>
  );
}

export default Post;
