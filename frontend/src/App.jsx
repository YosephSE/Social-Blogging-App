import {useState, useEffect, createContext} from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import MyPosts from "./pages/MyPosts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Authors from "./pages/Authors";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import UpdateProfile from "./pages/UpdateProfile";
import SinglePost from "./pages/SinglePost"


function App() {  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Blogs  />}/>
          <Route path="/createblog" element={<CreateBlog />}/>
          <Route path="/singlepost/:id" element={<SinglePost />}/>
          <Route path="/editblog/:id" element={<EditBlog />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/updateprofile" element={<UpdateProfile />}/>
          <Route path="/myposts" element={<MyPosts />} />
        </Routes>
    </Router>
  );
}

export default App;
