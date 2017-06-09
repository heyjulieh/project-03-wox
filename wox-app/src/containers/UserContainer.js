import React, {Component} from 'react'
import $ from 'jquery-ajax'
import User from '../components/User'


class UserContainer extends Component {
	constructor() {
		super();
		this.state = {
			user: []
		}

		this.loadPostFromServer = this.loadUserFromServer.bind(this);
		this.handleUserUpdate = this.handleUserUpdate.bind(this);
		this.handleUserDelete = this.handleUserDelete.bind(this);
	}

	loadUserFromServer() {
		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}`
		})
		.then((res) => {
			console.log(this.props.routeParams, 'route params')
			console.log('user res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({user: res})
		})

	}

	handlePostDelete(targetUser) {
		$.ajax({
			method: 'DELETE',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}`,
			data: targetUser
		})
		.then((res) => {
			console.log('User deleted', res)
		})
		window.location.href=`http://localhost:3001/users/${this.props.routeParams.userId}`
	}

	handleUserUpdate(targetUser) {
		$.ajax({
			method: 'PUT',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}`,
			data: targetUser
		})
		.then((res) => {

			console.log('user res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({user: targetUser})
		})
	}

	componentDidMount() {
		this.loadUserFromServer();
	}

	render() {
		return(

			<User
				user={ this.state.post }
				onUserUpdate={this.handleUserUpdate}
				onUserDelete={this.handleUserDelete}
			/>

		)
	}

}

export default UserContainer;
