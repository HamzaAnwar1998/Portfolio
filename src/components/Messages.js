import React, { Component } from 'react'
import IndividualMessage from '../components/IndividualMessage'

export class Messages extends Component {
    render() {
        // console.log(this.props.messages);
        return this.props.messages.map(message => (
            <IndividualMessage key={message.ID} message={message} />
        ))
    }
}

export default Messages
