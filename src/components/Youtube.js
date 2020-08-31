import React from 'react'
import '../css/Youtube.css'
import Todo from '../images/todoappWithVanillaJS.png'
import CreateData from '../images/how to create data.png'
import TodoReact from '../images/todoAppWithReact.png'
import { Link } from 'react-router-dom'

export const Youtube = () => {
    return (
        <div className='red-container'>
            <br /><br />
            <h2>YOUTUBE VIDEOS</h2>
            <br />
            <div className='youtube-container'>
                <div className='cards'>
                    <div className='img-box'>
                        <img src={Todo} alt="" />
                    </div>
                    <div className='title'>
                        TODO APP WITH VANILLA JS
                    </div>
                </div>
                <div className='cards'>
                    <div className='img-box'>
                        <img src={CreateData} alt="" />
                    </div>
                    <div className='title'>
                        CREATE DATA WITH FIREBASE
                    </div>
                </div>
                <div className='cards'>
                    <div className='img-box'>
                        <img src={TodoReact} alt="" />
                    </div>
                    <div className='title'>
                        TODO APP WITH REACT
                    </div>
                </div>
            </div>
            <br />
            <div>
                <Link to='/youtubevideos' className='link'>View More
                    <span><i className="fas fa-angle-double-right"></i></span>
                </Link>
            </div>
        </div>
    )
}
