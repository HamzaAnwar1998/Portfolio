import React from 'react'
import '../css/Footer.css'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='icon-box'>
                <motion.a href="https://www.facebook.com/humza74/" target="blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <div className='icons-div'>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </motion.a>
                <motion.a href="https://www.youtube.com/channel/UCcDXUaKdf_ZnXuPCZQfcYWQ?view_as=subscriber" target="blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <div className='icons-div'>
                        <i className="fab fa-youtube"></i>
                    </div>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/hamza-anwar-565563156/" target="blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <div className='icons-div'>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </motion.a>
                <motion.a href="https://github.com/HamzaAnwar1998/" target="blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <div className='icons-div'>
                        <i className="fab fa-git"></i>
                    </div>
                </motion.a>
            </div >
            <h6 className='h6'>Hamza Anwar</h6>
        </div>
    )
}
