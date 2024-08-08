import React, { useState } from "react";
import author from "../assets/image.png";
import commentIcon from "../assets/comment.png";
import liked from "../assets/like.png";
import notLiked from "../assets/like1.png";
import bookmarking from "../assets/bookmark.png";
import bookmarked from "../assets/bookmarked.png";
import CommentModal from "./CommentModal";

const SinglePost = () => {
    return (
        <div className="blog bg-white px-3 py-6 max-w-96 md:max-w-full rounded-3xl gap-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-10 ">
        <div className="flex flex-col order-last lg:order-first ml-3">
          <div className="author flex items-center">
            <img
              src=""
              alt="author profile"
              className="w-16 rounded-lg h-16"
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if default image also fails
                e.target.src = author;
              }}
            />
            <div className="author-detail">
              <div className="author-name font-bold px-3">Max Carter</div>
              <div className="date px-3">10minutes ago</div>
            </div>
          </div>
        <div className="flex-grown">
            <div className="title text-xl font-bold pt-4 text-justify">
              Hello
            </div>
            <div className="detail justify-between py-4 text-justify">
              {props.body}
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
              {props.category}
            </div>
              {isCommentModalOpen && (
              <CommentModal
                comments={comments}
                onClose={closeCommentModal}
                dataChange={props.dataChange}
                />
            )}
          </div>
          </div>
          </div>
          <img src={props.img} alt="Blog Img" className="rounded-3xl w-full lg:min-h-[70%] px-1 lg:px-5" />
        </div>
    )
}

export default SinglePost;