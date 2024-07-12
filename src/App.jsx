import {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import MyPosts from "./pages/MyPosts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Authors from "./pages/Authors";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";
import data  from "../data";

function App() {
  const[userData, setUserData] = useState(JSON.parse(localStorage.getItem)||{})
  useEffect(() => (
    localStorage.setItem(JSON.stringify(userData))
  ),[userData])

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Blogs data = {userData} handleChange = {setUserData}/>} />
          <Route path="/createblog" element={<CreateBlog data = {userData.posts} handleChange = {setUserData} />} />
          <Route path="/editblog" element={<EditBlog data = {userData} handleChange = {setUserData} />} />
          <Route path="/authors" element={<Authors data = {userData.users} handleChange = {setUserData}/>} />
          <Route path="/signin" element={<Signin data = {userData} handleChange = {setUserData}/>} />
          <Route path="/signup" element={<Signup data = {userData} handleChange = {setUserData}/>} />
          <Route path="/myposts" element={<MyPosts data = {userData} handleChange = {setUserData}/>} />
          <Route path="/profile" element={<Profile data = {userData} handleChange = {setUserData}/>} />
        </Routes>
    </Router>
  );
}

export default App;
