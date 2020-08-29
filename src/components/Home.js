import React from 'react'
import Navbar from './Navbar'
import { Hero } from './Hero'
import { Skills } from './Skills'
import { ProjectsInHome } from './ProjectsInHome'
// import { Modal } from './Modal'

class Home extends React.Component {
    render() {
        // console.log(this.props.projects);
        return (
            <div className='wrapper'>
                <Navbar />
                <Hero />
                <br />
                <Skills />
                <br /><br />
                <ProjectsInHome projects={this.props.projects}/>
                <br />
                {/* <Modal /> */}
            </div>
        )
    }
}

export default Home
