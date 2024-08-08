import React, { useState } from "react";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Blogs = ({data}) => {
  const [posts, setPosts] = useState(data.posts)
  return (
    <div className="flex flex-col min-h-screen">
      <Header page='Blogs' data = {data.posts} dataChange = {setPosts} />
      <Chatbot />
      <div className="md:grid-cols-[220px_1fr] pt-10 md:grid md:items-start py-4 flex flex-col items-center bg-gray-300">
        <ul className="mx-5 my-12 hidden flex-col gap-2 font-semibold md:flex">
          <li className="text-2xl font-bold">All Categories</li>
          <li>All Blogs</li>
          <li>Technology</li>
          <li>Art</li>
          <li>Education</li>
          <li>Nutrition</li>
          <li>Fashion</li>
          <li>Music</li>
          <li>Uncatagorized</li>
        </ul>
        <div className="blogs flex-grow grid grid-cols-1 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
          {posts.map((post) => {
            const user = data.users.filter((user) => user.name === post.name);
            return (
              <Blog
                name={post.name}
                date={post.date}
                key={post.id}
                title={post.title}
                category={post.category}
                body={post.body}
                comments={post.comments}
                profilePicture={user[0]?.profilePicture}
                img={post.img}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
