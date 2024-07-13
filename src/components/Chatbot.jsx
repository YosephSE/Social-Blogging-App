import React, { useState } from 'react';
import botIcon from "../assets/chatbot.png"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <div className={`transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} fixed bottom-4 right-4 bg-white shadow-lg w-2/5 h-2/3`}>
        <iframe
          src="https://zeresenayyaregalchatbot.streamlit.app/"
          className="w-full h-full"
          title="Chatbot"
        ></iframe>
      </div>
      <img src={botIcon} alt="BotIcon" />
    </div>
  );
};

export default Chatbot;
