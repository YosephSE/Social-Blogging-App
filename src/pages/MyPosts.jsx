import React from 'react'
import MyPost from '../components/Mypost'
import Chatbot from '../components/Chatbot'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyPosts = () => {
  return (
    <div>
      <Chatbot />
      <Header />
      <MyPost />
      <Footer />     
    </div>
  )
}

export default MyPosts
