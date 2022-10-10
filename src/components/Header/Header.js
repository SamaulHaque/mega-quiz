import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='header-container'>
            <div>
                <h2>Mega Quiz</h2>
            </div>
            <nav className='header'>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            </nav>
        </div>
        </div>
    );
};

export default Header;