import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full mt-auto">
      <div className="categories sm:flex sm:justify-center pt-4 flex-wrap sm:flex-nowrap pb-10">
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-44 text-center m-3">
          Technology
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Art
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Education
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Nutriation
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Fashion
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Mindfulness
        </div>
        <div className="category bg-gray-200 px-2 py-1 rounded-lg w-auto sm:w-36  text-center m-3">
          Uncatagorized
        </div>
      </div>
      <hr />
      <div className="copyright text-white italic font-thin text-center pb-4 pt-1">
        <p>All Rights Reserved &copy; Directed Foundation</p>
      </div>
    </div>
  );
};

export default Footer;
