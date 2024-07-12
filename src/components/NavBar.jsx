import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({id}) =>{
    const user = JSON.parse(localStorage.getItem("session"))
    return (
        <>
        { user?.name?
            <>
                <li className={id === "main" ? 'text-white hover:text-[#696565] text-xl': 'bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'}><Link to="/createblog">Create Blog</Link></li>
                <li className={id === "main" ? 'text-white hover:text-[#696565] text-xl': 'bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'}><Link to="/authors">Authors</Link></li>
                <li className={id === "main" ? 'text-white hover:text-[#696565] text-xl': 'bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'}><Link to="/myposts">My Posts</Link></li>
            </>
            :
            <>
                <li className={id === "main" ? 'text-white hover:text-[#696565] text-xl': 'bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'}><Link to="/signin">Sign In</Link></li>
                <li className={id === "main" ? 'text-white hover:text-[#696565] text-xl': 'bg-white text-[#696565] py-3 px-4 text-center border-t-[1px] border-black hover:bg-gray-400 hover:text-black'}><Link to="/authors">Authors</Link></li>
            </> 
        }
        </>
    )
}

export default NavBar;