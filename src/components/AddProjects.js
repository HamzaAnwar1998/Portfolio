import React, { useState } from 'react'

export const AddProjects = ({ addProjectsOnHome }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [link, setLink] = useState('');
    const [file, setFile] = useState(null);

    const [error, setError] = useState(null); // image error
    const types = ['image/png', 'image/jpeg']; // image types

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

    return (
        <div className='container'>
            <br />
            <h3>ADD PROJECTS IN HOME PAGE</h3>
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
    )
}
