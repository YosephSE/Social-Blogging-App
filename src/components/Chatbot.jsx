import React from "react";
import chatbot from "../assets/chatbot.png";
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div>
      <Link target="_blank" to="https://zeresenayyaregalchatbot.streamlit.app/">
        <img
          src={chatbot}
          alt="Fixed Image"
          className="fixed bottom-1 right-1 w-16 h-16 z-10"
        />
      </Link>
    </div>
  );
};

export default Chatbot;