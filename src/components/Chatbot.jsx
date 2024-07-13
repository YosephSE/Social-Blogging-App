import React, { useState } from 'react';

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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m13 3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Chatbot;
