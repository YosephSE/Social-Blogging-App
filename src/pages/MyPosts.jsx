import React from "react";
import MyPost from "../components/Mypost";
import Chatbot from "../components/Chatbot";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import postImg from '../assets/post.png'
const MyPosts = ({ data, dataChange }) => {
  let user = data.session.name;
  let posts = data.posts;
  let myPosts = [];
  for (let post of posts) {
    if (post.name === user) {
      myPosts.push(post);
    }
  }
  return (
    <div className="bg-gray-100">
      <Chatbot />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-80px)]">
        {myPosts.length === 0 ? (
          <div className="flex flex-col flex-grow text-center text-xl items-center justify-center h-full">
            <img src={postImg} alt="NEW POST" className="w-28 "/>
            <p className=" justify-center p-3">
              When you share your posts, they will appear here.
            </p>
            <Link to="/createblog" className="text-sky-700 hover:text-blue-700">Share Your First post</Link>
          </div>
        ) : (
          <div className=" flex-grow ">
          {myPosts.map((post) => (
            <MyPost
              img={post.img}
              title={post.title}
              dataChange={dataChange}
              id={post.id}
              key={post.id}
            />
          ))}</div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default MyPosts;
