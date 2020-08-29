import React from 'react'
import { Icon } from 'react-icons-kit'
import { code } from 'react-icons-kit/ionicons/code'

export const Hero = () => {
    return (
        <div className='hero-box'>
            <div className='leftside'>
                <div className='name'>
                    <div className='white'>HAMZA</div>
                    <div className='yellow'>ANWAR</div>
                </div>
                <div className='hero-text'>FRONT END DEVELOPER</div>
                <div className='icons'>
                    <span><i className="fab fa-html5"></i></span>
                    <span><i className="fab fa-css3-alt"></i></span>
                    <span><i className="fab fa-js"></i></span>
                    <span><i className="fab fa-react"></i></span>
                    <span><i className="fas fa-database"></i></span>
                </div>
            </div>
            {/* rightside */}
            <div className='hero-icon'>
                <Icon icon={code} size={256} />
            </div>
        </div>
    )
}
