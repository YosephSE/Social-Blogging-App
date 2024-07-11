import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import MyPosts from "./components/MyPosts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Authors from "./pages/Authors";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/editblog" element={<EditBlog />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myposts" element={<MyPosts />} />
        </Routes>
    </Router>
  );
}

export default App;
