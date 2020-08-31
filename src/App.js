import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { AddProjects } from './components/AddProjects'
import Home from './components/Home';
import { db, storage } from './config/Config'
import Navbar from './components/Navbar';
import { Blogs } from './components/Blogs'
import { Projects } from './components/Projects'
import { YoutubeVideos } from './components/YoutubeVideos'
import { Contact } from './components/Contact';

class App extends React.Component {

  state = {
    projects: []
  }

  componentDidMount() {
    const prevState = this.state.projects;
    db.collection('ProjectInHome').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          // console.log(change.doc.id);
          prevState.push({
            ID: change.doc.id,
            Title: change.doc.data().Title,
            Description: change.doc.data().Description,
            Category: change.doc.data().Category,
            Link: change.doc.data().Link,
            ImageUrl: change.doc.data().ImageUrl
          })
        }
        this.setState({
          projects: prevState
        })
      })
    })
  }

  // add projects on home
  addProjectsOnHome = (title, description, category, link, file) => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    }, err => {
      console.log(err.message);
    }, () => {
      storage.ref('images').child(file.name).getDownloadURL().then(url => {
        db.collection('ProjectInHome').add({
          Title: title,
          Description: description,
          Category: category,
          Link: link,
          ImageUrl: url
        })
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={() => <Home projects={this.state.projects} />} />
        <Route path='/login' component={Login} />
        <Route path='/addprojects' component={() => <AddProjects addProjectsOnHome={this.addProjectsOnHome} />} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/projects' component={Projects} />
        <Route path='/youtubevideos' component={YoutubeVideos} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter >
    );
  }
}

export default App;
