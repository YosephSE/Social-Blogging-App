import React from "react";
import MyPost from "../components/Mypost";
import Chatbot from "../components/Chatbot";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../../data";

const MyPosts = () => {
  let posts = data.posts;
  return (
    <div className="bg-gray-100">
      <Chatbot />
      {/* <Header /> */}
      {posts.map(post => (
        <MyPost body={post.body} category={post.category} img={post.img} name={post.name} title={post.title} key={post.id}/>
      ))}
      
      <Footer />
    </div>
  );
};

export default MyPosts;
