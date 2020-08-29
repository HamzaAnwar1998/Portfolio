// import React from 'react'
// import { IndividualProject } from './IndividualProject'

// export const ProjectsInHome = ({ projects }) => {
//     console.log(projects);
//     return projects.map(project => (
//         <IndividualProject key={project.id} project={project} />
//     ))
// }

import React, { Component } from 'react'
import IndividualProject from './IndividualProject'

export class ProjectsInHome extends Component {
    render() {
        console.log(this.props.projects);
        return (
            <div>
                {
                    this.props.projects.map((project) => (
                        <p>{project.Title}</p>
                    ))
                }
            </div>
        )
    }
}

export default ProjectsInHome

