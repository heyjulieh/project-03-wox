import React, {Component} from 'react'
import $ from 'jquery-ajax';
import WalkList from '../components/WalkList'
import Walks from '../components/Walk'
import CreateWalkForm from '../components/CreateWalkForm'


class WalkContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			walks: []
		};

		this.loadWalksFromServer = this.loadWalksFromServer.bind(this);
		this.handleNewWalksSubmit = this.handleNewWalksSubmit.bind(this);
		//this.handleWalksSubmit = this.handleWalksSubmit.bind(this);
		// this.handleWalksDelete = this.handleWalkstDelete.bind(this);
		// this.handleWalksUpdate = this.handleWalksUpdate.bind(this);

	}

	loadWalksFromServer(){

		// need to load walks from server
		console.log('user id', this.props.routeParams.userId);
	    $.ajax({
	      method: 'GET',
	      url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/walks`
	    })
	    .then( (res) => {this.setState({walks: res})
			})
  	}

	handleNewWalksSubmit(walk){

		walk.user = this.props.routeParams.userId;

		console.log('reached handleNewWalksSubmit');
		let walks = this.state.walks;
		console.log('walks is: ', walks);
		let newWalks = walks.concat([walk]);
		console.log('newWalks is: ', newWalks)
		this.setState({walks: newWalks});
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

handleWalksDelete(id){
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/api/users/:userId/walks/:walkId'

	    })
	    .then((res) => {
	      console.log('Walks deleted');
	    }, (err) => {
	      console.error(err);
	    });
	}

    handleWalksUpdate(id, walk) {
    //sends the walks id and new text to our api
    $.ajax({
      method: 'PUT',
      url:'http://localhost:3000/api/users/:userId/walks/:walkId' ,
      data: walk
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.loadWalksFromServer();
    // setInterval(this.loadWalksFromServer, this.props.pollInterval);
  }


	render() {

		const targetWalks = this.state.walks.map(walk => walk.userName)

		const testWalks = this.state.walks[0]

		console.log('targetWalks is: ', testWalks)

		return(

			<div>
				<WalksList
					userName={targetWalks[0]}
					walks={this.state.walks}
					onWalksDelete={this.handleWalksDelete}
					onWalksUpdate={this.handleWalksUpdate}/>
				<CreateWalksForm
       				 onCreateWalksFormSubmit={ this.handleNewWalksSubmit } />
       		</div>
		)
	}
}

export default WalkContainer;
