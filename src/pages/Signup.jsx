import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import profilePicture from "../assets/profilepicture.png"
import { Link } from "react-router-dom";

function Signup({data , dataChange}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userExists = data.filter(user => user.email === email)
    if(userExists){
      setError('Account exists please login!');
    }
    else {
      const userData = {
        name,
        email,
        password,
        profilePicture,
      };

      let users = data;

      
      users.push(userData);

      dataChange(prevData => ({
        ...prevData,
        users: users
      }))

      navigate('/signin');
    }
  };

  return (
    <>
    <Header />
    <div className='min-h-[calc(100vh-80px)] flex flex-col'>
    <div className="flex items-center justify-center bg-gray-200 w-full flex-grow">
      <div className="w-full max-w-xs">
        <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl mb-6">Sign up</h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mb-4">{error}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Already have an account? <span className='text-blue-500'><Link to="/signin" >Sign In</Link></span>
          </p>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default Signup;
