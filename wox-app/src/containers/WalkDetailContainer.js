import React, {Component} from 'react'
import $ from 'jquery-ajax'
import WalkDetail from '../components/WalkDetail'

// need to import edit walk form

class WalkDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			walk: []
		}

		this.loadWalkFromServer = this.loadWalkFromServer.bind(this);
		this.handleWalkUpdate = this.handleWalkUpdate.bind(this);
		this.handleWalkDelete = this.handleWalkDelete.bind(this);


	}

	loadWalkFromServer() {
		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/walks}`
		})
		.then((res) => {
			console.log(this.props.routeParams, 'route params')
			console.log('walk detail res is: ', res)
			// find the walk within the returned res.walks that matches our URL walk id
			this.setState({walk: res})
		})

	}

	handleWalkDelete(targetWalk) {
		$.ajax({
			method: 'DELETE',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/walks/${this.props.routeParams.walkId}`,
			data: targetWalk
		})
		.then((res) => {
			console.log('Walk deleted', res)
		})
		window.location.href=`http://localhost:3001/users/${this.props.routeParams.userId}`
	}

	handleWalkUpdate(targetWalk) {
		$.ajax({
			method: 'PUT',
			url: `http://localhost:3000/api/users/${this.props.routeParams.userId}/walks/${this.props.routeParams.walkId}`,
			data: targetWalk
		})
		.then((res) => {

			console.log('walk detail res is: ', res)
			// find the walk within the returned res.walks that matches our URL walk id
			this.setState({walk: targetWalk})
		})
	}

	componentDidMount() {
		this.loadWalkFromServer();
	}

	render() {
		return(

			<WalkDetail
				walk={ this.state.walk }
				onWalkUpdate={this.handleWalkUpdate}
				onWalkDelete={this.handleWalkDelete}
			/>

		)
	}

}

export default WalkDetailContainer;

				// This stuff goes in Walk Detail Component above
				// {/*uniqueID={ this.state.walk['_id']}*/}
				// {/*key={ this.state.walk['_id'] }*/}

// add onWalkUpdate as a prop to WalkDetail on line 44

// onWalkDelete={ this.onWalkDelete }
