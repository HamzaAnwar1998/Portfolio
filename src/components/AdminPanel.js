import React, { Component } from 'react'
import '../css/Admin.css'
import Messages from './Messages'
import { auth } from '../config/Config'
import { Sidebar } from './Sidebar'

export class AdminPanel extends Component {

    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLoggedIn: true
                })
            }
            else {
                this.setState({
                    isLoggedIn: false
                })
            }
        })
    }

    render() {
        // console.log(this.props.contactMessages);
        switch (this.state.isLoggedIn) {
            case true:
                return (
                    <div className='dashboard-box'>
                        <div className='sidebar'>
                            <Sidebar />
                        </div>
                        <div className='rightside'>
                            {this.props.contactMessages &&
                                <>
                                    <h1 className='heading'>User Messages</h1>
                                    <br />
                                    <div className='table-responsive'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <Messages messages={this.props.contactMessages} />
                                        </table>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                )
            case false:
                return (
                    <div className='container-fluid'>You dont have permission to view this page</div>
                )
        }
    }
}

export default AdminPanel
