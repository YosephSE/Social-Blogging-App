import { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from '../assets/close.png';
import deleteIcon from '../assets/deleteicon.png'
import { useAuth } from '../AuthContext';
import api from "../../api/posts";

const CommentModal = ({ comments, onClose, id}) => {
  const { status } = useAuth()
  const navigate = useNavigate()
  const [allComments, setAllComments] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const submitComment = async () => {
    const finalComment = {
      content: newComment
    }
    setAllComments(prevData => [...prevData, finalComment])
    try{
      await api.post(`/${id}/comment`, finalComment)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-[95%] p-4">
        <div className="flex justify-between items-center pb-2 border-b">
          <h2 className="text-xl font-bold">Comments</h2>
          <span onClick={onClose} className="text-red-500">
            <img className="w-10" src={closeIcon} alt="close comments" />
          </span>
        </div>
        <div className="mt-4">
          {allComments.length !== 0 ? (
            allComments.map((comment, index) => (
              <div key={index} className="mb-2 mx-8 flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">{comment.username}</div>
                  <p className="mt-1 text-gray-700">{comment.content}</p>
                </div>
                <img src={deleteIcon} alt="Delte Icon" className="h-6"/>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
        {status.loggedIn ? (
          <div className="mt-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="mt-2 w-full bg-gray-900 text-white py-2 rounded-md"
              onClick={submitComment}
            >
              Submit
            </button>
          </div>
        ) : (
          <button className="text-white bg-black py-3 rounded-md w-full mt-4 mx-auto" onClick={() => navigate('/signin')}>Login To Comment</button>
        )}
      </div>
    </div>
  );
};

export default CommentModal;
