import React, {Component} from 'react'

class Message extends Component {
	render() {

		let formattedDate = this.props.message.date.split("T")[0];
		let content = this.props.message.content;
		let messageLink = `/users/${this.props.message.user}/messages/${this.props.message._id}`
		console.log('message props', this.props.message)
		return(

			<div className="messageCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<h3 className="messageUserSender">{this.props.message.userSender}</h3>
					<h4 className="messageUserAcceptor">{this.props.message.userAcceptor}</h4>
				</div>
				<div className="messageSection col-sm-12 col-md-12 col-lg-9">
					<h1 className="messageTitle">{this.props.message.title}</h1>
					<p className="messageContent">{content}</p>
					<h6 className="messageDate">Sent on: {formattedDate}</h6>
				</div>
			</div>
		)
	}
}

export default Message;
