import React from 'react'
import { IndividualProject } from './IndividualProject'

export const Projects = ({ projects, setSelectedImg }) => {
    return projects.map(project => (
        <IndividualProject key={project.ID} project={project}
            setSelectedImg={setSelectedImg} />
    ))
}

export default Projects;
