import React, {Component} from 'react'
import $ from 'jquery-ajax'
import User from '../components/User'
import Walk from '../components/Walk'
import UserWalkContainer from './UserWalkContainer'


class UserContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			walk:[],
			user: []
		}

		console.log('user state', this.state);

		this.loadUserFromServer = this.loadUserFromServer.bind(this);
		// this.handleUserUpdate = this.handleUserUpdate.bind(this);
		// this.handleUserDelete = this.handleUserDelete.bind(this);
	}

	loadUserFromServer() {
		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userName}`
		})
		.then((res) => {
			console.log(this.props, 'props')
			console.log('user res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({user: res})
		})

	}

	handleUserDelete(targetUser) {
		$.ajax({
			method: 'DELETE',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userName}`,
			data: targetUser
		})
		.then((res) => {
			console.log('User deleted', res)
		})
		window.location.href=`http://localhost:5000/users/${this.props.routeParams.userId}`
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

	componentWillMount() {
		this.loadUserFromServer();
		console.log('loadUser', this.state.user);
	}

	render() {

		return(
			<div>
				<User
					key={this.state.user._id}
					uniqueId={[this.state.user._id]}
					user={ this.state.user.userName }
					onUserUpdate={this.handleUserUpdate}
					onUserDelete={this.handleUserDelete}
				/>
			</div>
		)
	}
}

export default UserContainer;
