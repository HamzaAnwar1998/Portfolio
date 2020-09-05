import React, { Component } from 'react'

export class IndividualMessage extends Component {
    render() {
        // console.log(this.props.message);
        return (
            <tbody>
                <tr>
                    <td>{this.props.message.Name}</td>
                    <td>{this.props.message.Email}</td>
                    <td>{this.props.message.Message}</td>
                </tr>
            </tbody>
        )
    }
}

export default IndividualMessage
