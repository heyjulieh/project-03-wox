import React, {Component} from 'react';
import $ from 'jquery-ajax';

import User from '../components/User';
import WalkList from '../components/WalkList';
import Walk from '../components/Walk';
import WalkForm from '../components/WalkForm'

class UserWalkContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			walks: [],
			user: ''
		};

		console.log('state is:', this.state.props);

		this.loadUserFromServer = this.loadUserFromServer.bind(this);
		this.loadWalksFromServer = this.loadWalksFromServer.bind(this);
		this.handleNewWalkSubmit = this.handleNewWalkSubmit.bind(this);
		this.handleWalkDelete = this.handleWalkDelete.bind(this);
		this.handleWalkUpdate = this.handleWalkUpdate.bind(this);

	}

	loadWalksFromServer(){

		// need to load walks from server
	    $.ajax({
	      method: 'GET',
	      url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/walks`
	    })
	    .then( (res) => {this.setState({walks: res})
			})
			console.log('routeParams is:', this.props.routeParams.userName);
  	}

	loadUserFromServer(){

		// need to load walks from server
	    $.ajax({
	      method: 'GET',
	      url: `http://localhost:3000/api/users/${this.props.routeParams.userName}`
	    })
	    .then( (res) => {this.setState({user: res})
			})
			console.log('routeParams is:', this.props.routeParams.userName);
  }

	handleNewWalkSubmit(walk){

		walk.userName = this.props.routeParams.userName;

		console.log('reached handleNewWalkSubmit');
		let walks = this.state.walks;
		console.log('walks is: ', walks);
		let newWalk = walks.concat([walk]);
		console.log('newWalk is: ', newWalk)
		this.setState({walks: newWalk});
		// use this once walks' data route is confirmed
		//url: 'http://localhost:3000/api/users/:userId/walks'

		$.ajax({
			method: 'POST',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/walks`,
			data: walk
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
			this.setState({walks: walks});
		});
	}

	handleWalkDelete(targetWalk){
	    $.ajax({
	      method: 'DELETE',
	      url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/${this.props.routeParams.walkId}`,
				data: targetWalk
		    })
		    .then((res) => {
		      console.log('Walk deleted');
		    })
				window.location.href=`http://localhost:5000/users/${this.props.routeParams.userName}`
		}

		handleWalkUpdate(targetWalk) {
		//sends the walks id and new text to our api
		$.ajax({
			method: 'PUT',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/${this.props.routeParams.walkId}`,
			data: targetWalk
		})
		.then(res => {
			console.log(res);
			this.setState({walk: targetWalk})
		})
		}

  componentWillMount() {
    this.loadUserFromServer();
		this.loadWalksFromServer();
    // setInterval(this.loadWalksFromServer, this.props.pollInterval);
		console.log('loadwalks', this.state.walks);
		console.log('loaduser', this.state.user);

  }


	render() {

		const targetWalk = this.state.walks.map(walk => walk.userName)

		const testWalk = this.state.walks[0]

		console.log('targetWalk is: ', testWalk)

		return(

			<div className="wrapper">
				{/*<User
					userName={targetWalk[0]}
					user={this.state.walks}
				/>*/}
				<WalkList
					userName={targetWalk[0]}
					walks={this.state.walks}
					/>
				<WalkForm
					onWalkFormSubmit={this.handleNewWalkSubmit} />
      </div>
		)
	}
}

export default UserWalkContainer;
