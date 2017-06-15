import React, {Component} from 'react'
import $ from 'jquery-ajax'
import MessageDetail from '../components/MessageDetail'

// need to import edit message form

class MessageDetailContainer extends Component {
	constructor() {
		super();
		this.state = {

			message: []
		}

		this.loadMessageFromServer = this.loadMessageFromServer.bind(this);
		this.handleMessageUpdate = this.handleMessageUpdate.bind(this);
		this.handleMessageDelete = this.handleMessageDelete.bind(this);


	}

	loadMessageFromServer() {
		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/messages/${this.props.routeParams.messageId}`
		})
		.then((res) => {
			console.log(this.props.routeParams, 'route params')
			console.log('message detail res is: ', res)
			// find the message within the returned res.messages that matches our URL message id
			this.setState({message: res})
		})

	}

	handleMessageDelete(targetMessage) {
		$.ajax({
			method: 'DELETE',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/messages/${this.props.routeParams.messageId}`,
			data: targetMessage
		})
		.then((res) => {
			console.log('Message deleted', res)
		})
		window.location.href=`/users/${this.props.routeParams.userId}`
	}

	handleMessageUpdate(targetMessage) {
		$.ajax({
			method: 'PUT',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/messages/${this.props.routeParams.messageId}`,
			data: targetMessage
		})
		.then((res) => {

			console.log('message detail res is: ', res)
			// find the message within the returned res.messages that matches our URL message id
			this.setState({message: targetMessage})
		})
	}

	componentDidMount() {
		this.loadMessageFromServer();
	}

	render() {
		return(

			<MessageDetail
				message={ this.state.message }
				onMessageUpdate={this.handleMessageUpdate}
				onMessageDelete={this.handleMessageDelete}
			/>

		)
	}

}

export default MessageDetailContainer;

				// This stuff goes in Message Detail Component above
				// {/*uniqueID={ this.state.message['_id']}*/}
				// {/*key={ this.state.message['_id'] }*/}

// add onMessageUpdate as a prop to MessageDetail on line 44

// onMessageDelete={ this.onMessageDelete }
