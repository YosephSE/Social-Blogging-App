import React, { useState } from "react";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Blogs = () => {
  let posts = JSON.parse(localStorage.getItem("posts")) || []
  return (
    <>
      <Header />
      <Chatbot />
      
      
      <div className="blogs grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
        {posts.map((post) => (
          <Blog
            name={post.name}
            key={post.id}
            title={post.title}
            category={post.category}
            body={post.body}
            img={post.img}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
