import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const handleToggle = () => {
        const navbox = document.getElementById('navbox');
        const rightside = document.getElementById('rightside');
        const toggleIcon = document.getElementById('toggleIcon');
        toggleIcon.classList.toggle('active');
        navbox.classList.toggle('active');
        rightside.classList.toggle('active');
    }

    return (
        <div className='navbox' id='navbox'>
            <div className='leftside'>Hamza Anwar</div>
            <span className='toggle-icon' id='toggleIcon' onClick={handleToggle}>
                <i className='fas fa-bars'></i>
            </span>
            <div className='rightside' id='rightside'>
                <div className='links'><Link className='Link' to='/'>HOME</Link></div>
                <div className='links'><Link className='Link' to='/blogs'>BLOGS</Link></div>
                <div className='links'><Link className='Link' to='/contact'>CONTACT</Link></div>
                <div className='links'><Link className='Link' to='/admin-login'>ADMIN-LOGIN</Link></div>
            </div>
        </div>
    )
}

export default Navbar;
