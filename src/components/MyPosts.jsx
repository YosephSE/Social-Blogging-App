import React from "react";
import author from "../assets/author.png";
function MyPosts() {
  return (
    <div className="myposts bg-gray-200">
      <div className="post-item bg-white flex mx-3 my-2 rounded-xl">
        <img
          className="h-20 w-24 mx-4 my-3 rounded-lg "
          src={author}
          alt="IMG"
        />
        <div className="flex items-center"><p className="title p-3 font-semibold cursor-pointer items-center">
          The Evolution of Rock Music from the 50s to Now
        </p></div>
        <div className="buttons flex flex-wrap">
        <button className="bg-white w-14 py-2 rounded-lg my-auto mx-1 border-black border-2 ">
          Edit
        </button>
        <button className="bg-black text-white w-14 py-2 rounded-lg  mx-1 my-auto border-black border-2 ">
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
