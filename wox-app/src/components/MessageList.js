import React, {Component} from 'react'
import Message from './Message'

class MessageList extends Component {

	render() {
		let messagesArray = this.props.messages.map( (message) => {
			return (
				<Message
					key={message._id}
					uniqueId={[message._id]}
					message={message}
					className="messageCard" />
			)
		})

		return(
			<div className="messagesList container">
				<h1>Explore Messages</h1>
				<div className="row">
					{messagesArray}
				</div>
			</div>
		)
	}
}

export default MessageList;
