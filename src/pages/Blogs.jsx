import React, { useState } from "react";
import Blog from "../components/Blog";
import data from "../../data";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Blogs = () => {
  let users = data.posts;
  return (
    <>
      <Header />
      <Chatbot />
      
      
      <div className="blogs grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
        {users.map((user) => (
          <Blog
            name={user.name}
            key={user.id}
            title={user.title}
            category={user.category}
            body={user.body}
            // img={user.posts[0].img}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
