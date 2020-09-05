import React, { useState } from 'react'
import { auth } from '../config/Config'
import { withRouter } from 'react-router-dom'

export const AdminLogin = ({ history }) => {

    // console.log(history);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass).then((res) => {
            // console.log(res);
            history.push('/adminpanel');
        }).catch(err => {
            console.log(err);
        })
        setEmail('');
        setPass('');
    }

    return (
        <div className='container'>
            <br />
            <h3>Admin Login</h3>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPass(e.target.value)} value={pass} />
                <br />
                <input type="submit" className='btn btn-success btn-md login-btn' />
            </form>
        </div>
    )
}

export default withRouter(AdminLogin);