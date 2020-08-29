import React from 'react'

export const Login = () => {
    return (
        <div className='container'>
            <br />
            <h3>Login</h3>
            <hr />
            <form autoComplete="off" className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required />
                <br />
                <input type="submit" className='btn btn-success btn-md login-btn' />
            </form>
        </div>
    )
}
