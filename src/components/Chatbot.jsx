import React, { useState } from 'react';
import botIcon from "../assets/chatbot.png"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <div className={`transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} fixed bottom-4 right-4 bg-white shadow-lg w-1/5 h-1/2`}>
        <iframe
          src="https://zeresenayyaregalchatbot.streamlit.app/"
          className="w-full h-full"
          title="Chatbot"
        ></iframe>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
       <img src={botIcon} alt="BotIcon" className='w-16 h-16 '/>
      </button>
    </div>
  );
};

export default Chatbot;
