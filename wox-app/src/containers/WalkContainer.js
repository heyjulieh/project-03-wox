import React, {Component} from 'react';
import $ from 'jquery-ajax';

import Walk from '../components/Walk'
import WalkList from '../components/WalkList';
import WalkForm from '../components/WalkForm'

class WalkContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			walks: []
		};

		console.log('walk state', this.state);

		this.loadWalksFromServer = this.loadWalksFromServer.bind(this);
		this.handleNewWalkSubmit = this.handleNewWalkSubmit.bind(this);
		this.handleWalkDelete = this.handleWalkDelete.bind(this);
		this.handleWalkUpdate = this.handleWalkUpdate.bind(this);

	}

	loadWalksFromServer(){

		// need to load walks from server
	    $.ajax({
	      method: 'GET',
	      url: `http://localhost:3000/api/walks`
	    })
	    .then( (res) => {this.setState({walks: res})
			})
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
			url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/walks/`,
			data: walk
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
			this.setState({walks: walks});
		});
		console.log(this.props.routeParams.userName, 'username');
	}

handleWalkDelete(targetWalk){
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/walks/:walkid`,
	    })
	    .then((res) => {
				console.log('walkid is:', this.props.routeParams);
	      console.log('Walk deleted');
	    })
	}

  handleWalkUpdate(targetWalk) {
    //sends the walks id and new text to our api
    $.ajax({
      method: 'PUT',
      url: `http://localhost:3000/api/users/${this.props.routeParams.userName}/walks/:walkid`,
      data: targetWalk
    })
    .then(res => {
      console.log(res);
    })
  }

  componentDidMount() {
    this.loadWalksFromServer();
    // setInterval(this.loadWalksFromServer, this.props.pollInterval);
		console.log('loadwalks', this.state.walks);
  }


	render() {

		const targetWalk = this.state.walks.map(walk => walk.userName)

		const testWalk = this.state.walks[0]

		console.log('targetWalk is: ', testWalk, targetWalk)

		return(

			<div className="wrapper">
				<WalkForm
					userName={targetWalk[0]}
					walks={this.state.walks}
					onWalkFormSubmit={this.handleNewWalkSubmit} />
				<WalkList
					userName={targetWalk[0]}
					walks={this.state.walks}
					onWalkDelete={ this.handleWalkDelete }
			 		onWalkUpdate={ this.handleWalkUpdate }
					 />
      </div>
		)
	}
}

export default WalkContainer;
