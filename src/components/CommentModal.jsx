import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentModal = ({ comments, onClose }) => {
  const navigate = useNavigate()
  const [allComments, setAllComments] = useState(comments);
  const [newComment, setNewComment] = useState("");
  const username = JSON.parse(localStorage.getItem("session")).name;
  const logged =
    JSON.parse(localStorage.getItem("session")).name === "" ? false : true;

  const submitComment = () => {
    allComments.push({ username, comment: newComment });
    console.log(allComments)
    setNewComment("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-[95%] p-4">
        <div className="flex justify-between items-center pb-2 border-b">
          <h2 className="text-xl font-bold">Comments</h2>
          <button onClick={onClose} className="text-red-500">
            Close
          </button>
        </div>
        <div className="mt-4">
          {allComments.length !== 0 ? (
            allComments.map((comment, index) => (
              <div key={index} className="mb-2">
                <div className="text-lg font-semibold">{comment.username}</div>
                <p className="mt-1 text-gray-700">{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
        {logged ? (
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
