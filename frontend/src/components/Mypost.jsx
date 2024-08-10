import React from "react";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";

function MyPost({ id, img, title, handleChange }) {
  const navigate = useNavigate()

  const editPost = async () => {
    navigate(`/editblog/${id}`)
  }

  const deletePost = async() => {
    handleChange(true)
    try{
      await api.delete(`/${id}`)
    } catch (err){
      console.log(err)
    }
  }
  
  return (
    <div className="flex justify-center items-center m-3">
      <div className="bg-white flex mx-3 my-2 rounded-xl w-[90] sm:w-[80%] md:w-3/5 lg:w-1/2">
        <img
          className="h-20 w-24 mx-4 my-3 rounded-lg"
          src={img}
          alt="IMG"
        />
        <div className="flex items-center flex-grow">
          <p className="title p-3 font-semibold cursor-pointer items-center">
            {title}
          </p>
        </div>
        <div className="buttons flex flex-col ml-auto">
          <button className="bg-white w-14 py-2 rounded-lg my-auto mx-1 border-black border-2" onClick={editPost}>
             Edit
          </button>
          <button className="bg-black text-white w-14 py-2 rounded-lg mx-1 my-auto border-black border-2 mr-2" onClick={deletePost}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
