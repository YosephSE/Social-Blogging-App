import React from 'react';
import search from "../assets/search.png"
import { Link } from 'react-router-dom';
import home from '../assets/home.png'
import NavBar from './NavBar';

const Header = () => {
    const toggleMenu = () => {
        document.getElementById("hamburgerBtn").classList.toggle('toggle-btn')
        document.getElementById("mobile-nav-bar").classList.toggle('block')
        document.getElementById("mobile-nav-bar").classList.toggle('hidden')
    }
    return (
        <>
        <div className='bg-[#1D1B20] flex justify-around lg:justify-between items-center'>
            <div className='flex justify-around  w-full py-4 min-w-80 lg:max-w-96 lg:mx-4 items-center'>
                <Link to = "/"><img src={home} alt="Home image" className='w-12 h-12'/></Link>
                <div className='bg-white rounded-3xl p-1 items-center'>
                    <img src={search} alt="" className='inline'/>
                    <input type="text" placeholder='Search by name' className='px-2 rounded-3xl w-[50vw] md:w-60 focus:outline-none'/>
                </div>
                <button onClick={toggleMenu} id="hamburgerBtn" className="relative h-8 w-8 cursor-pointer text-3xl lg:hidden">
                    <div
                        className="absolute top-4 -mt-0.5 h-1 w-8 bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:bg-white after:transition-all after:duration-500 after:content-['']">
                    </div>
                </button>
            </div>
            <nav id="main-nav-bar" className='hidden lg:block mx-4 lg:mx-28'>
                <ul className='flex gap-5 justify-around'>
                    <NavBar id = "main" />
                </ul>
            </nav>
        </div>
        <nav id="mobile-nav-bar" className='w-36 absolute right-2 hidden lg:hidden'>
            <ul>
                <NavBar id="mobile" />
            </ul>
        </nav>
        </>
    );
};

export default Header
