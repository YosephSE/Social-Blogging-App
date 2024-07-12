import React from 'react';
import home from "../assets/Home.png"
import search from "../assets/search.png"
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleMenu = () => {
        document.getElementById("hamburgerBtn").classList.toggle('toggle-btn')
        document.getElementById("mobile-nav-bar").classList.toggle('block')
        document.getElementById("mobile-nav-bar").classList.toggle('hidden')
    }
    return (
        <>
        <div className='bg-[#1D1B20] flex justify-around py-4 items-center'>
            <img src={home} alt="Home image"/>
            <div className='bg-white rounded-3xl p-1 items'>
                <img src={search} alt="" className='inline'/>
                <input type="text" placeholder='Search by name' className='px-2 rounded-3xl w-40 focus:outline-none'/>
            </div>
            <button onClick={toggleMenu} id="hamburgerBtn" className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
                 <div
                    className="absolute top-4 -mt-0.5 h-1 w-8 bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:bg-white after:transition-all after:duration-500 after:content-['']">
                 </div>
            </button>
        </div>
        <nav id="mobile-nav-bar" className='w-36 absolute right-2 hidden'>
            <ul>
                <li className='bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'><Link to="/">Home</Link></li>
                <li className='bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'><Link to="/createblog">Create Blog</Link></li>
                <li className='bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'><Link to="/authors">Authors</Link></li>
                <li className='bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'><Link to="/myposts">My Posts</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Header
