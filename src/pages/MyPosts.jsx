import React from "react";
import MyPost from "../components/Mypost";
import Chatbot from "../components/Chatbot";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyPosts = ({data, dataChange}) => {
  let user = data.session.name
  let posts = data.posts
  let myPosts = []
  for(let post of posts){
    if(post.name === user){
      myPosts.push(post)
    }
  }
  return (
    <div className="bg-gray-100 ">
      <Chatbot />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {myPosts.map(post => (
        <MyPost img={post.img} title={post.title} dataChange= {dataChange} id={post.id} key={post.id}/>
      ))}
      
      <Footer />
      </div>
    </div>
  );
};

export default MyPosts;
