import React from 'react';

function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 w-full">
      <div className="w-full max-w-xs">
        <form className="rounded px-8 pt-6 pb-8 mb-4 ">
          <h2 className=" text-2xl mb-6">Sign up</h2>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
          </div>
         
          <div className="flex items-center justify-between">
            <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Don't have an account? <a className="text-blue-500" href="/login">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
