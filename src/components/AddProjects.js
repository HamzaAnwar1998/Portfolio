import React, { useState } from 'react'
import { Sidebar } from './Sidebar';
import '../css/Admin.css'
import { useEffect } from 'react';
import { auth } from '../config/Config'

export const AddProjects = ({ addProjectsOnHome }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [link, setLink] = useState('');
    const [file, setFile] = useState(null);

    const [error, setError] = useState(null); // image error
    const types = ['image/png', 'image/jpeg']; // image types

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true)
                // console.log(user);
            }
            else {
                setIsLoggedIn(false)
            }
        })
    })

    // image handler on home
    const imageHandlerOnHome = (e) => {
        let selectedFiles = e.target.files[0];
        if (selectedFiles && types.includes(selectedFiles.type)) {
            setFile(selectedFiles);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // submit handler on home
    const handleSubmitOnHome = (e) => {
        e.preventDefault();
        addProjectsOnHome(title, description, category, link, file);
        setTitle('');
        setDescription('');
        setCategory('');
        setLink('');
        document.getElementById('file').value = '';
    }

    switch (isLoggedIn) {
        case true:
            return (
                    <div className='dashboard-box'>
                        <div className='sidebar'>
                            <Sidebar />
                        </div>
                        <div className='rightside'>
                            <div className='container'>
                                <h1 className='heading'>ADD PROJECTS</h1>
                                <hr />
                                <form autoComplete="off" className='form-group' onSubmit={handleSubmitOnHome}>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className='form-control' required
                                        onChange={(e) => setTitle(e.target.value)} value={title} />
                                    <br />
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className='form-control' required
                                        onChange={(e) => setDescription(e.target.value)} value={description} />
                                    <br />
                                    <label htmlFor="category">Category</label>
                                    <input type="text" className='form-control' required
                                        onChange={(e) => setCategory(e.target.value)} value={category} />
                                    <br />
                                    <label htmlFor="link">Link</label>
                                    <input type="text" className='form-control' required
                                        onChange={(e) => setLink(e.target.value)} value={link} />
                                    <br />
                                    <input type="file" className='form-control' required
                                        onChange={imageHandlerOnHome} id='file' />
                                    <br />
                                    <input type="submit" className='btn btn-success btn-md login-btn' />
                                </form>
                                {error && <div className='container error'>{error}</div>}
                            </div>
                        </div>
                    </div>
            )
        case false:
            return (
                <div className='container-fluid'>You dont have permission to view this page</div>
            )
    }
}
