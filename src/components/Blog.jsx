import React from "react";
import author from "../assets/author.png";
import comment from "../assets/comment.png";
import like from "../assets/like.png";
import bookmark from "../assets/bookmark1.png";
import ai from "../assets/ai.png"

function Blog(props) {
  return (
    
      <div className="blog bg-white p-3 rounded-3xl">
        <img src={ai} alt="Blog Img" className="rounded-3xl" />
        <div className="title text-xl font-bold pt-4 text-justify">
          {props.title}
        </div>
        <div className="detail justify-between py-4 text-justify">
         {props.body}
        </div>
        <div className="author flex py-3">
            <img src={author} alt="author profile" className="w-16 rounded-lg" />
            <div className="author-detail">
                <div className="author-name font-bold px-3">{props.name}</div>
                <div className="date px-3">50 days ago</div>
            </div>
        </div>
        <hr className=" bg-gray-700 w-full h-1 mb-3"/>
        <div className="raction flex justify-end">
            <img src={comment} alt="comments" className="h-6 px-1"/>
            <img src={like} alt="Like" className="h-6 px-1"/>
            <img src={bookmark} alt="Bookmark" className="h-6 px-1"/>
            <div className="catagory bg-slate-400 px-2 py-1 rounded-lg">{props.category}</div>
        </div>
      </div>
    
  );
}

export default Blog;
