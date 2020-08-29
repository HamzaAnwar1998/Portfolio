// import React from 'react'

// export const IndividualProject = ({ project }) => {
//     console.log(project);
//     return (
//         <div>
//             {project.title}
//         </div>
//     )
// }

import React, { Component } from 'react'

class IndividualProject extends Component {
    componentDidMount() {
        console.log('Individual Project Mounted');
        console.log(this.props.project);
    }
    render() {
        console.log(this.props.project);
        return (
            <div>

            </div>
        )
    }
}

export default IndividualProject
