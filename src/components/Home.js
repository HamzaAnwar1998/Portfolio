import React from 'react'
import { Hero } from './Hero'
import { Skills } from './Skills'
import { ProjectsInHome } from './ProjectsInHome'
import { Modal } from './Modal'
import '../css/Projects.css'
import { Youtube } from './Youtube'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    state = {
        selectedImg: null
    }

    // set selected Image
    setSelectedImg = (img) => {
        this.setState({
            selectedImg: img
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <Hero />
                <br />
                <Skills />
                <br /><br />
                {/* projects */}
                {this.props.projects && <div className='container-fluid'>
                    <h2>PROJECTS</h2>
                    <br />
                    <div className='projects-box'>
                        <ProjectsInHome projects={this.props.projects} setSelectedImg={this.setSelectedImg} />
                        <div className='viewmore-div'>
                            <Link to='/projects' className='link'>View More
                            <span><i className="fas fa-angle-double-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>}
                <br />
                {this.state.selectedImg && <Modal selectedImg={this.state.selectedImg}
                    setSelectedImg={this.setSelectedImg} />}
                {/* youtube */}
                <Youtube />
            </div>
        )
    }
}

export default Home
