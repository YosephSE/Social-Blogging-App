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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Chatbot />
      <Header />
      {myPosts.map(post => (
        <MyPost img={post.img} title={post.title} dataChange= {dataChange} id={post.id} key={post.id}/>
      ))}
      
      <Footer />
    </div>
  );
};

export default MyPosts;
