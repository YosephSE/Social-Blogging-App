import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createblog">Create Blog</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/myposts">My Posts</Link></li>

            </ul>
        </nav>
    );
};

export default Header
