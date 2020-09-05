import React from 'react'
import '../css/Youtube.css'
import { motion } from 'framer-motion'

export const IndividualYoutubeVideo = ({ video }) => {
    // console.log(video);
    return (
        <>
            <motion.div className='cards'
                animate={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}>
                <div className='img-box'>
                    <a href={video.Link} target="blank"><img src={video.Image} alt="" /></a>
                </div>
                <div className='title'>
                    <a href={video.Link} target="blank">{video.Title}</a>
                </div>
            </motion.div>

        </>
    )
}
