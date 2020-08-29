import React from 'react'
import { motion } from 'framer-motion'

export const Skills = () => {
    return (
        <div className='skills-box'>
            <div className='skills-leftside'>
                <h3>SKILLS & EXPERIENCE</h3>
                <h6>3 years developement experience using HTML,
                CSS, Bootstrap, JavaScript, React, Firebase
                </h6>
            </div>
            <div className='skills-rightside'>
                {/* html */}
                <div className='progress-bar'>
                    <div className='name'>HTML</div>
                    <motion.div className='portion'
                        initial={{ width: '0%' }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 1 }}></motion.div>
                    <span className='percentage-span'>99%</span>
                </div><br />
                {/* css */}
                <div className='progress-bar'>
                    <div className='name'>CSS</div>
                    <motion.div className='portion'
                        initial={{ width: '0%' }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 1 }}></motion.div>
                    <span className='percentage-span'>99%</span>
                </div><br />
                {/* javascript */}
                <div className='progress-bar'>
                    <div className='name'>JavaScript</div>
                    <motion.div className='portion'
                        initial={{ width: '0%' }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 1 }}></motion.div>
                    <span className='percentage-span'>80%</span>
                </div><br />
                {/* react */}
                <div className='progress-bar'>
                    <div className='name'>React</div>
                    <motion.div className='portion'
                        initial={{ width: '0%' }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 1 }}></motion.div>
                    <span className='percentage-span'>80%</span>
                </div><br />
                {/* firebase */}
                <div className='progress-bar'>
                    <div className='name'>Firebase</div>
                    <motion.div className='portion'
                        initial={{ width: '0%' }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 1 }}></motion.div>
                    <span className='percentage-span'>80%</span>
                </div>
            </div>
        </div>
    )
}
