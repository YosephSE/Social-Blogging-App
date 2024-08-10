import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import author from "../assets/image.png";
import commentIcon from "../assets/comment.png";
import liked from "../assets/like.png";
import notLiked from "../assets/like1.png";
import bookmarking from "../assets/bookmark.png";
import bookmarked from "../assets/bookmarked.png";

function Blog(props) {
  const [like, setLike] = useState(false);
  const [book, setBook] = useState(false);
  
  const navigate = useNavigate()
  const toggleLike = () => {
    setLike((prevLike) => !prevLike);
  };
  const likeImg = like ? liked : notLiked;
  const toggleBook = () => {
    setBook((prevBook) => !prevBook);
  };

  const bookImg = book ? bookmarked : bookmarking;

  const calculateTimeElapsed = () => {
    const postDate = new Date(props.date);
    const milli = postDate.getTime()
    const now = new Date().getTime();
    const elapsed = now - milli;

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

  const handleClick = () =>{
    navigate(`/singlepost/${props.id}`)
  }
  return (
    <div onClick={handleClick} className="blog bg-white px-3 py-6 max-w-96 md:max-w-full rounded-3xl gap-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-10 hover:shadow-lg hover:cursor-pointer ">
      <div className="flex flex-col order-last lg:order-first ml-3">
        <div className="author flex items-center">
          <img
            src={props.profilePicture}
            alt="author profile"
            className="w-16 rounded-lg h-16"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if default image also fails
              e.target.src = author;
            }}
          />
          <div className="author-detail">
            <div className="author-name font-bold px-3">{props.name}</div>
            <div className="date px-3">{diff}</div>
          </div>
        </div>
      <div className="flex-grown">
          <div className="title text-xl font-bold pt-4 text-justify">
            {props.title}
          </div>
          <div className="detail justify-between py-4 text-justify" dangerouslySetInnerHTML={{ __html: props.body }}>
          </div>
      </div> 
      <div className="mt-auto">
        <hr className=" bg-gray-700 w-full h-1 mb-3" />
        <div className="flex justify-start">
          <img
            src={commentIcon}
            alt="comments"
            className="h-6 px-1"
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
            {props.category}
          </div>
        </div>
        </div>
        </div>
        <img src={props.img} alt="Blog Img" className="rounded-3xl w-full lg:min-h-[70%] max-h-72 px-1 lg:px-5" />
      </div>


  );
}

export default Blog;
