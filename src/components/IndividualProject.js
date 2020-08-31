import React from 'react'
import '../css/Projects.css'
import { motion } from 'framer-motion'

export const IndividualProject = ({ project, setSelectedImg }) => {
    // console.log(project);
    return (

        <div className='project-card'>
            <motion.div className='img-box' onClick={() => setSelectedImg(project.ImageUrl)}
                whileHover={{ opacity: 1 }}>
                <motion.img src={project.ImageUrl} alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            </motion.div>
            <div className='details-box'>
                <h3>{project.Title}</h3>
                <h6>{project.Description}</h6>
                <h6>{project.Category}</h6>
                <h6><a href={project.Link} target='blank'>
                    {project.Link}</a>
                </h6>
            </div>
        </div>

    )
}
