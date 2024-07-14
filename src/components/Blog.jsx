import React from "react";
import author from "../assets/image.png";
import comment from "../assets/comment.png";
import liked from "../assets/like.png";
import notLiked from "../assets/like1.png";
import bookmarking from "../assets/bookmark.png";
import bookmarked from "../assets/bookmarked.png";
import ai from "../assets/ai.png"

function Blog(props) {
  let [like, setLike] = React.useState(false)
  let [book, setBook] = React.useState(false)
  function toggleLike(){
    setLike(like => !like)
  }
  let likeImg = like ? liked: notLiked;
  function toggleBook(){
    setBook(book => !book)
  }
  let bookImg = book ? bookmarked: bookmarking;
  let diff;
  const calculateTimeElapsed = () => {
    const postDate = props.date;
    const now = new Date().getTime();
    const elapsed = now - postDate;

  
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    if(months >= 1){
      diff = `${months} month${months === 1? "": "s"} ago`
    }else if(days >= 1){
      diff = `${days} day${days === 1? "": "s"} ago`
    } else if(hours >= 1){
      diff = `${hours} hour${hours === 1? "": "s"} ago`
    } else if(minutes >= 1){
      diff = `${minutes} minute${minutes === 1? "": "s"} ago`
    } else if(seconds >= 1){
      diff = `${seconds} second${seconds === 1? "": "s"} ago`
    } else{
      diff = "Now"
    }
  };

  calculateTimeElapsed()
  return (
    
      <div className="blog bg-white p-3 rounded-3xl">
        <img src={props.img} alt="Blog Img" className="rounded-3xl" />
        <div className="title text-xl font-bold pt-4 text-justify">
          {props.title}
        </div>
        <div className="detail justify-between py-4 text-justify">
         {props.body}
        </div>
        <div className="author flex py-3">
          <img
          src={props.profilePicture}
          alt="author profile"
          className="w-16 rounded-lg h-16"
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if default image also fails
            e.target.src = author;
        }}/>
            <div className="author-detail">
                <div className="author-name font-bold px-3">{props.name}</div>
                <div className="date px-3">{diff}</div>
            </div>
        </div>
        <hr className=" bg-gray-700 w-full h-1 mb-3"/>
        <div className="raction flex justify-end">
            <img src={comment} alt="comments" className="h-6 px-1"/>
            <img src={likeImg} alt="Like" className="h-6 px-1" onClick={toggleLike}/>
            <img src={bookImg} alt="Bookmark" className="h-7 px-1" onClick={toggleBook}/>
            <div className="catagory bg-slate-400 px-2 py-1 rounded-lg">{props.category}</div>
        </div>
      </div>
    
  );
}

export default Blog;
