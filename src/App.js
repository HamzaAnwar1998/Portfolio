import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { AddProjects } from './components/AddProjects'
import Home from './components/Home';
import { db, storage } from './config/Config'
import { useEffect } from 'react';

function App() {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [link, setLink] = useState('');
  // const [file, setFile] = useState(null);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // console.log('use effect is triggered');
    const prevState = projects;
    db.collection('ProjectInHome').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          prevState.push({
            Title: change.doc.data().Title,
            Description: change.doc.data().Description,
            Category: change.doc.data().Category,
            Link: change.doc.data().Link,
            ImageUrl: change.doc.data().ImageUrl
          })
        }
        setProjects(prevState);
        // console.log(projects);
      })
    })
  })

  // add projects on home
  const addProjectsOnHome = (title, description, category, link, file) => {
    // console.log(title, description, category, link, file);
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

  return (
    <BrowserRouter>
      <Route exact path='/' component={() => <Home projects={projects} />} />
      <Route path='/login' component={Login} />
      <Route path='/addprojects' component={() => <AddProjects addProjectOnHome={addProjectsOnHome} />} />
    </BrowserRouter>
  );
}

export default App;
