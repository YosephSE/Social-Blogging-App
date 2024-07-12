import React from "react";
import MyPost from "../components/Mypost";
import Chatbot from "../components/Chatbot";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../../data";

const MyPosts = () => {
  let user = (JSON.parse(localStorage.getItem("session"))).name
  let posts = JSON.parse(localStorage.getItem("posts"))
  let myPosts = []
  for(let post of posts){
    if(post.name === user){
      myPosts.push(post)
    }
  }

  return (
    <div className="bg-gray-100">
      <Chatbot />
      <Header />
      {myPosts.map(post => (
        <MyPost body={post.body} category={post.category} img={post.img} name={post.name} title={post.title} key={post.id}/>
      ))}
      
      <Footer />
    </div>
  );
};

export default MyPosts;
