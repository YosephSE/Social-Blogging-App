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

  const img = data.users.filter((person) => person.name === user)
  return (
    <div className="bg-gray-100">
      <Chatbot />
      <Header />
      {myPosts.map(post => (
        <MyPost img={img[0].profilePicture} title={post.title} dataChange= {dataChange} id={post.id} key={post.id}/>
      ))}
      
      <Footer />
    </div>
  );
};

export default MyPosts;
