import React, { useState } from 'react'

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <div className='container'>
            <br />
            <h3>Contact</h3>
            <hr />
            <form autoComplete="off" className='form-control'>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="message">Message</label>
                <textarea className='form-control' required
                    onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
                <br />
                <button type='submit' className='btn btn-success btn-md login-btn'>Submit</button>
            </form>
        </div>
    )
}
