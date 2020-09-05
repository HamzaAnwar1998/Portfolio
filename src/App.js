import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Blogs } from './components/Blogs'
import { Contact } from './components/Contact';
import AdminLogin from './components/AdminLogin'
import { AdminPanel } from './components/AdminPanel'
import { AddProjects } from './components/AddProjects'
import { AddYoutubeVideos } from './components/AddYoutubeVideos';
import {AddBlogs} from './components/AddBlogs'
import { db, storage } from './config/Config'

class App extends React.Component {

  state = {
    projects: [],
    contactMessages: [],
    selectedImg: null,
    youtubeVideos: []
  }

  componentDidMount() {

    // retriving projects
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

    // retriving messages to its state
    const prevStateContactMsgs = this.state.contactMessages;
    db.collection('ContactMessages').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          prevStateContactMsgs.push({
            ID: change.doc.id,
            Name: change.doc.data().Name,
            Email: change.doc.data().Email,
            Message: change.doc.data().Message
          })
        }
        this.setState({
          contactMessages: prevStateContactMsgs
        })
      })
    })

    // retriving youtube information to its state
    const prevState3 = this.state.youtubeVideos;
    db.collection('YoutubeVideos').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          prevState3.push({
            ID_OF_VIDEO: change.doc.id,
            Title: change.doc.data().Title,
            Link: change.doc.data().Link,
            Image: change.doc.data().ThumbnailImage
          })
        }
        this.setState({
          youtubeVideos: prevState3
        })
      })
    })

  }

  // add projects
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

  // addMessages
  addMessages = (name, email, msg) => {
    // console.log(name, email, msg);
    db.collection('ContactMessages').add({
      Name: name,
      Email: email,
      Message: msg
    })
  }

  // setting selected img for modal
  setSelectedImg = (img) => {
    // console.log(img);
    this.setState({
      selectedImg: img
    })
  }

  // addVideosOfYoutube
  addVideosOfYoutube = (title, link, file) => {
    // console.log(title, link, file);
    const uploadTask = storage.ref(`thumbnailImages/${file.name}`).put(file);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    }, err => {
      console.log(err.message)
    }, () => {
      storage.ref('thumbnailImages').child(file.name).getDownloadURL().then(url => {
        db.collection('YoutubeVideos').add({
          Title: title,
          Link: link,
          ThumbnailImage: url
        })
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={() => <Home projects={this.state.projects}
          videos={this.state.youtubeVideos} />} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/contact' component={() => <Contact addMessages={this.addMessages} />} />
        <Route path='/admin-login' component={AdminLogin} />
        <Route path='/adminpanel' component={() => <AdminPanel contactMessages={this.state.contactMessages} />} />
        <Route path='/addprojects' component={() => <AddProjects addProjectsOnHome={this.addProjectsOnHome} />} />
        <Route path='/addyoutubevideos' component={() => (<AddYoutubeVideos addVideosOfYoutube={this.addVideosOfYoutube} />)} />
        <Route path='/addblogs' component={AddBlogs} />
      </BrowserRouter>
    );
  }
}

export default App;
