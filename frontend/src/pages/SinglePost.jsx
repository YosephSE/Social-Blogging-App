import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../components/Loading";
import author from "../assets/image.png";
import commentIcon from "../assets/comment.png";
import liked from "../assets/like.png";
import notLiked from "../assets/like1.png";
import bookmarking from "../assets/bookmark.png";
import bookmarked from "../assets/bookmarked.png";
import CommentModal from "../components/CommentModal";
import api from "../../api/posts"
import Header from "../components/Header";
import Footer from "../components/Footer";

const SinglePost = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState([])
    const [like, setLike] = useState(false);
    const [book, setBook] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const { id } = useParams()

    useEffect(() => {

      const getPost = async () =>{
        const response = await api.get(`/${id}`)
        const resData = response.data
        setPost(resData.post)
        setIsLoading(false)
      }
      try{
        getPost()
        }
      catch (err){
        console.log(err)
      }

    },[])

    const toggleLike = () => {
      setLike((prevLike) => !prevLike);
    };
    const likeImg = like ? liked : notLiked;
    const toggleBook = () => {
      setBook((prevBook) => !prevBook);
    };

    const bookImg = book ? bookmarked : bookmarking;

    const openCommentModal = () => {
      setIsCommentModalOpen(true);
    };

    const closeCommentModal = () => {
      setIsCommentModalOpen(false);
    };
    const calculateTimeElapsed = () => {
      const postDate = post.createdAt;
      const now = new Date().getTime();
      const elapsed = now - postDate;

      const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

      if (months >= 1) {
        return `${months} month${months === 1 ? "" : "s"} ago`;
      } else if (days >= 1) {
        return `${days} day${days === 1 ? "" : "s"} ago`;
      } else if (hours >= 1) {
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
      } else if (minutes >= 1) {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      } else if (seconds >= 1) {
        return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
      } else {
        return "Now";
      }
    };

    const diff = calculateTimeElapsed();
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        {isLoading ?
          <LoadingPage />
          :
          <div className="blog bg-white w-[90%] my-4 mt-10 mx-auto flex-grow gap-5 grid grid-cols-1 items-center lg:gap-10">
          <div className="flex px-3 py-3 flex-col order-last ml-3">
            <div className="author flex items-center">
              <img
                src=""
                alt="author profile"
                className="w-16 h-16"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = author;
                }}
              />
              <div className="author-detail">
                <div className="author-name font-bold px-3">{post.authorId.name}</div>
                <div className="date px-3">{diff}</div>
              </div>
            </div>
          <div className="flex-grow">
              <div className="title text-xl font-bold pt-4 text-justify">
                {post.title}
              </div>
              <div className="detail justify-between py-4 text-justify">
                {post.content}
              </div>
          </div>
          <div className="mt-auto">
            <hr className=" bg-gray-700 w-full h-1 mb-3" />
            <div className="flex justify-start">
              <img
                src={commentIcon}
                alt="comments"
                className="h-6 px-1"
                onClick={openCommentModal}
              />
              <img
                src={likeImg}
                alt="Like"
                className="h-6 px-1"
                onClick={toggleLike}
              />
              <img
                src={bookImg}
                alt="Bookmark"
                className="h-7 px-1"
                onClick={toggleBook}
              />
              <div className="catagory bg-slate-400 px-2 py-1 rounded-lg">
                {post.category}
              </div>
                {isCommentModalOpen && (
                <CommentModal
                  comments={post.comments}
                  onClose={closeCommentModal}
                  id = {id}
                  />
              )}
            </div>
            </div>
            </div>
            <div className="w-full h-80"> 
              <img src={post.img} alt="Blog Img" className="object-cover w-full h-full"/>
            </div>
          </div>
        }
        <Footer />
      </div>
    );
}

export default SinglePost;