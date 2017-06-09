import React, {Component} from 'react'
import $ from 'jquery-ajax';
import MessageList from '../components/MessageList'
import Message from '../components/Message'
import MessageForm from '../components/MessageForm'


class MessageContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};

		this.loadMessagesFromServer = this.loadMessagesFromServer.bind(this);
		this.handleNewMessageSubmit = this.handleNewMessageSubmit.bind(this);
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
		this.handleMessageDelete = this.handleMessageDelete.bind(this);
	}

	loadMessagesFromServer(){
		// need to load messages from server
		console.log('message id', this.props.routeParams.messageId);
	    $.ajax({
	      method: 'GET',
	      url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/messages`
	    })
	    .then( (res) => {this.setState({messages: res})
			})
  	}

	handleNewMessageSubmit(message){
		message.user = this.props.routeParams.userId;
		console.log('reached handleNewMessageSubmit');
		let messages = this.state.messages;
		console.log('messages is: ', messages);
		// use this once posts' data route is confirmed
		//url: 'http://localhost:3000/api/users/:userId/messages'

		$.ajax({
			method: 'POST',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/messages/`,
			data: message
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
			this.setState({messages: messages});
		});
	}

handleMessageDelete(id){
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/api/users/:userId/messages/:messageId'

	    })
	    .then((res) => {
	      console.log('Message deleted');
	    }, (err) => {
	      console.error(err);
	    });
	}

    handleMessageUpdate(id, message) {
    //sends the posts id and new text to our api
    $.ajax({
      method: 'PUT',
      url:'http://localhost:3000/api/users/:userId/messages/:messageId' ,
      data: message
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.loadMessagesFromServer();
  }

	render() {

		const targetMessage = this.state.messages.map(message => message.userName)

		const testMessage = this.state.messages[0]

		console.log('targetMessage is: ', testMessage)

		return(

			<div>
				<MessageList
					userName={targetMessage[0]}
					messages={this.state.messages}
					onMessageDelete={this.handleMessageDelete}
					onMessageUpdate={this.handleMessageUpdate}/>
				<MessageForm
       		onMessageFormSubmit={this.handleNewMessageSubmit}/>
      </div>
		)
	}
}

export default MessageContainer;
