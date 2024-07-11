import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.png'
const Header = () => {
    return (
        <nav className='bg-black text-white flex'>
            
                <Link to="/"><img src={home} alt="Home" className='w-16 lg:w-20 h-auto '/></Link>
                <ul className='flex items-center'>
                <li><Link to="/createblog">Create Blog</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/myposts">My Posts</Link></li>

            </ul>
        </nav>
        
    );
};

export default Header
