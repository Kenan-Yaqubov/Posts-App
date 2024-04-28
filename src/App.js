import "./App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Posts from "./Posts";
import PostBodyRendering from "./PostDetails";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <>
      <BrowserRouter>
        <Header toggle={toggleMenu}></Header>
        <main className="container">
          <Aside collapsed={isMenuCollapsed}></Aside>
          <div className="routeHolder">
            <Routes>
              <Route path="/" element={<div>Home</div>}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/posts/:id" element={<PostBodyRendering />}></Route>
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
    </>
  );
}

export default App;
