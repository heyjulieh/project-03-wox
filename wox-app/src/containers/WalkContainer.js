import React, {Component} from 'react';
import $ from 'jquery-ajax';

import WalkList from '../components/WalkList';
// import Walk from '../components/Walk';
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
		//this.handleWalkSubmit = this.handleWalkSubmit.bind(this);
		// this.handleWalkDelete = this.handleWalkDelete.bind(this);
		// this.handleWalkUpdate = this.handleWalkUpdate.bind(this);

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

		walk.user = this.props.routeParams.userName;

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
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/walks/`,
			data: walk
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
			this.setState({walks: walks});
		});
	}

// handleWalkDelete(id){
//     $.ajax({
//       method: 'DELETE',
//       url: 'http://localhost:3000/api/users/:userId/walks/:walkId'
//
// 	    })
// 	    .then((res) => {
// 	      console.log('Walk deleted');
// 	    }, (err) => {
// 	      console.error(err);
// 	    });
// 	}
//
//     handleWalkUpdate(id, walk) {
//     //sends the walks id and new text to our api
//     $.ajax({
//       method: 'PUT',
//       url:'http://localhost:3000/api/users/:userId/walks/:walkId' ,
//       data: walk
//     })
//     .then(res => {
//       console.log(res);
//     }, err => {
//       console.log(err);
//     })
//   }

  componentDidMount() {
    this.loadWalksFromServer();
    // setInterval(this.loadWalksFromServer, this.props.pollInterval);
		console.log('loadwalks', this.state.walks);
  }


	render() {

		const targetWalk = this.state.walks.map(walk => walk.userName)

		const testWalk = this.state.walks[0]

		console.log('targetWalk is: ', testWalk)

		return(

			<div className="wrapper">
				<WalkList
					userName={targetWalk[0]}
					walks={this.state.walks}
					// onWalkDelete={this.handleWalkDelete}
					// onWalkUpdate={this.handleWalkUpdate}
					/>
				<WalkForm
       		onWalkFormSubmit={this.handleNewWalkSubmit} />
      </div>
		)
	}
}

export default WalkContainer;
