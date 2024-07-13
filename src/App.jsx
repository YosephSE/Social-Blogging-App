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

  const[userData, setUserData] = useState({
    users: JSON.parse(localStorage.getItem("users")) || data.users,
    posts: JSON.parse(localStorage.getItem("posts")) || data.posts,
    session: JSON.parse(localStorage.getItem("session")) || data.session
  })

  useEffect(() => {
     localStorage.setItem("users", JSON.stringify(userData.users))
     localStorage.setItem("posts", JSON.stringify(userData.posts))
     localStorage.setItem("session", JSON.stringify(userData.session))
  },[userData])
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Blogs data = {userData} />} />
          <Route path="/createblog" element={<CreateBlog data={userData.session.name} dataChange = {setUserData} />} />
          <Route path="/editblog" element={<EditBlog data = {userData} dataChange = {setUserData} />} />
          <Route path="/authors" element={<Authors data = {userData}/>} />
          <Route path="/signin" element={<Signin data = {userData.users}/>} />
          <Route path="/signup" element={<Signup data = {userData.users} dataChange = {setUserData}/>} />
          <Route path="/myposts" element={<MyPosts data = {userData} dataChange = {setUserData}/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </Router>
  );
}

export default App;
