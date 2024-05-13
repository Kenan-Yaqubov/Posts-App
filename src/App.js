import "./App.css";
import React, { Suspense, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
// import Posts from "./Posts";
import PostBodyRendering from "./PostDetails";
import MyContext from "./MyContext";
import Users from "./Users";
import UserDetails from "./UserDetails";
const Posts = React.lazy(() => import("./Posts.js"));

function App() {
  
  let [users, setUsers] = useState([]);
  let [usersLoading, setUsersLoading] = useState(false);
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);
  let [comments, setComments] = useState([]);
  
  let varObj = {
    users,
    setUsers,
    usersLoading,
    setUsersLoading,
    posts,
    setPosts,
    postsLoading,
    setPostsLoading,
    comments,
    setComments,
  };
  
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <>
      <MyContext.Provider value={varObj}>
        <BrowserRouter>
          <Header toggle={toggleMenu}></Header>
          <main className="container">
            <Aside collapsed={isMenuCollapsed}></Aside>
            <div className="routeHolder">
              <Routes>
                {/* <Route
                  path="/"
                  element={
                    <>
                      <div>{value}</div>
                      <button
                      onClick={() => {
                        dispatch(increment());
                        }}
                      >
                        Increase
                      </button>
                      <button
                        onClick={() => {
                          dispatch(decrement());
                        }}
                      >
                        Decrease
                      </button>
                      <button
                        onClick={() => {
                          dispatch(incrementByAmount(5));
                        }}
                      >
                        increment By 5
                      </button>
                    </>
                  }
                ></Route> */}
                <Route path="/posts" element={<Posts />}></Route>
                <Route
                  path="/posts/:id"
                  element={<PostBodyRendering />}
                ></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/users/:id" element={<UserDetails />}></Route>
                <Route
                  path="*"
                  element={<div>404 Page not found ):</div>}
                ></Route>
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
