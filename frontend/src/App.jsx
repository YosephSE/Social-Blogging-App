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
import data  from "../data";


function App() {

  const authContext = createContext({loggedIn: false, user:''})

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
          <Route path="/" element={<Blogs data = {userData} />} dataChange = {setUserData} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/singlepost/:id" element={<SinglePost />}/>
          <Route path="/editblog/:id" element={<EditBlog data = {userData} dataChange = {setUserData} />} />
          <Route path="/authors" element={<Authors data = {userData}/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/updateprofile" element={<UpdateProfile />}/>
          <Route path="/myposts" element={<MyPosts data = {userData} dataChange = {setUserData}/>} />
        </Routes>
    </Router>
  );
}

export default App;
