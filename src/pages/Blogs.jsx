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
      <div className="blogs flex-grow grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
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
              profilePicture ={user[0]?.profilePicture}
              img = {post.img}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
