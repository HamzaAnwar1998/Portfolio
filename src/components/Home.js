import React from 'react'
import { Hero } from './Hero'
import { Skills } from './Skills'
import { Projects } from './Projects'
import '../css/Projects.css'
import { Modal } from './Modal'
import { YoutubeVideos } from './YoutubeVideos'
import '../css/Youtube.css'
import { Footer } from './Footer'

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
                    <h2 className='projects-heading'>PROJECTS</h2>
                    <br /><br />
                    <div className='projects-box'>
                        <Projects projects={this.props.projects} setSelectedImg={this.setSelectedImg} />
                    </div>
                </div>}
                <br /><br />
                {/* Modal */}
                {this.state.selectedImg && <Modal selectedImg={this.state.selectedImg}
                    setSelectedImg={this.setSelectedImg} />}
                {/* youtube */}
                {this.props.videos && <div className='red-container'>
                    <br /><br />
                    <h2 className='youtube-heading'>YOUTUBE VIDEOS</h2>
                    <br /><br />
                    <div className='youtube-container'>
                        <YoutubeVideos videos={this.props.videos} />
                    </div>
                </div>}
                {/* footer */}
                <Footer />
            </div>
        )
    }
}

export default Home
