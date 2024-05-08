import { createContext } from "react";

const contextValue = {
  users: [],
  usersLoading: false,
  posts: [],
  postsLoading: false,
  comments: [],
  commentsLoading: false,
};

const MyContext = createContext(contextValue);

export default MyContext;
