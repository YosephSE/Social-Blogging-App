import React, { useEffect, useState } from "react";
import MyPost from "../components/Mypost";
import Chatbot from "../components/Chatbot";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import postImg from '../assets/post.png'
import LoadingPage from '../components/Loading';
import api from '../../api/posts'
import { useAuth } from "../AuthContext";

const MyPosts = () => {
  const { status } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  !status.loggedIn && navigate('/')
  useEffect(() => {
    const getPosts = async () => {
      const response = await api.get('/my/my')
      const resData = response.data
      setPosts(resData)
      setIsLoading(false)
    }
    try{
      getPosts()
    } catch(err){
      console.log(err)
      setIsLoading(false)
    }
  }, [isLoading])

  return (
    <div className="bg-gray-300">
      <Chatbot />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {
        isLoading?
        <LoadingPage />
        :
        posts?.message ? (
          <div className="flex flex-col flex-grow text-center text-xl items-center justify-center h-full">
            <img src={postImg} alt="NEW POST" className="w-28 "/>
            <p className=" justify-center p-3">
              When you share your posts, they will appear here.
            </p>
            <Link to="/createblog" className="text-sky-700 hover:text-blue-700">Share Your First post</Link>
          </div>
        ) : (
          <div className=" flex-grow ">
          {posts.map((post) => (
            <MyPost
              img={post.image}
              title={post.title}
              id={post._id}
              handleChange = {setIsLoading}
              key={post._id}
            />
          ))}</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyPosts;
