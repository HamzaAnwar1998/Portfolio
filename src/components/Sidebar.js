import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Admin.css'

export const Sidebar = () => {
    return (
        <>
            <h1 className='admin-heading'>ADMIN PANEL</h1>
            <br />
            <div className='links'><Link className='Link' to='/adminpanel'>ADMIN PANEL</Link></div>
            <div className='links'><Link className='Link' to='/addprojects'>ADD PROJECTS</Link></div>
            <div className='links'><Link className='Link' to='/addblogs'>ADD BLOGS</Link></div>
            <div className='links'><Link className='Link' to='/addyoutubevideos'>ADD YOUTUBE VIDEOS</Link></div>
        </>
    )
}
