import React, { useState } from "react";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Blogs = ({data}) => {
  const posts = data.posts
  return (
    <div className="min-h-screen">
      <Header />
      <Chatbot />
      
      
      <div className="blogs grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
        {posts.map((post) => {
          const user = data.users.filter(user => user.name === post.name)
          return(
            <Blog
              name={post.name}
              date={post.date}
              key={post.id}
              title={post.title}
              category={post.category}
              body={post.body}
              img={user[0]?.profilePicture}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
