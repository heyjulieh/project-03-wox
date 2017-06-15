import React, {Component} from 'react'

class Walk extends Component {
	constructor(props) {
		super(props)
		this.state={
			images: [],
			user: '',
			userName: '',
			location: '',
			title: '',
			content: '',
			dateCreated: Date,
			editMode: false
	}
	this.updateWalk = this.updateWalk.bind(this);
	this.handleWalkUpdate = this.handleWalkUpdate.bind(this)
	this.handleInputChange = this.handleInputChange.bind(this)
	this.deleteWalk = this.deleteWalk.bind(this)
};

deleteWalk(e) {
	let targetWalk = this.state;
	e.preventDefault();
	var result = window.confirm("Are you sure you want to delete this walk?");
	if (result) {
		this.props.onWalkDelete(targetWalk);
		console.log('this state is', this.state);
		}
}

updateWalk(e) {
	e.preventDefault();
	this.setState({editMode: !this.state.editMode});
}

handleWalkUpdate(e) {

	let targetWalk = this.state

	e.preventDefault();
	// let id = this.props.uniqueID;
	let images = this.state.images.trim();
	let user = this.state.user.trim();
	let userName = this.state.userName.trim();
	let location = this.state.location.trim();
	let title = this.state.title.trim();
	let content = this.state.content.trim();

	this.props.onWalkUpdate(targetWalk);
	// need to include walk as a param above
	console.log('made it to handleUpdateWalk')
	this.setState({
		editMode: !this.state.editMode,
		images: [],
		user: '',
		userName: '',
		location: '',
		title: '',
		content: '',
		dateCreated: '',
	})
}

handleInputChange(e) {

	if (e.target.name === 'images') {
		this.setState({ images: e.target.value });
	}

	if (e.target.name === 'userName') {
		this.setState({ userName: e.target.value });
	}

	if (e.target.name === 'location') {
		this.setState({ location: e.target.value });
	}

	if (e.target.name === 'title') {
		this.setState({ title: e.target.value });
	}

	if (e.target.name === 'content') {
		this.setState({ content: e.target.value });
	}

}

	render() {

		let formattedDate = this.props.walk.dateCreated.split("T")[0];
		let truncatedContent = this.props.walk.content.substring(0, 500) + '...';
		let walkLink = `/users/${this.props.walk.userName}/walks/${this.props.walk._id}`
		console.log('walk props', this.props.walk)
		return(

			<div className="walkCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-3 col-lg-3">
					<img className="walkImage" src={this.props.walk.images[0]}></img>
				</div>
				<div className="walkSection col-sm-12 col-md-9 col-lg-9">
					<h1 className="walkTitle">{this.props.walk.title}</h1>
					<h4 className="walkUser">by {this.props.walk.userName}</h4>
					<p className="walkLocation">in {this.props.walk.location}</p>
					<p className="walkContent">{truncatedContent}</p>
					<h5 className="pull-right"><a className="walkLink" href={walkLink}>Read more...</a></h5>
					<h6 className="walkDate pull-right">Posted on: {formattedDate}</h6>
					<button className='edit-span' onClick={this.updateWalk}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
					<button className='delete-span' onClick={this.deleteWalk}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
					<div>
						 { (this.state.editMode)
							 ? (<div className="container">
				        		<div className="form-group row">
										 <form className="userList-form" onSubmit={ this.handleUpdateWalk }>
						 	        <input
												className='form-control'
						 	          type='text'
						 	          placeholder='Links to images...'
												name='images'
						 	          value={ this.state.images}
						 	          onChange={ this.handleInputChange } /><br></br>
						 	        <input
												className='form-control'
						 	          type='text'
												placeholder='Enter Your Username...'
												name='userName'
						 	          value={ this.state.userName }
						 	          onChange={ this.handleInputChange } /><br></br>
						 	        <input
												className='form-control'
						 	          type='text'
						 	          placeholder='Location of Walk ...'
												name='location'
						 	          value={ this.state.location }
						 	          onChange={ this.handleInputChange } /><br></br>
						 	        <input
												className='form-control'
						 	          type='text'
						 	          placeholder='Choose a Title...'
												name='title'
						 	          value={ this.state.title }
						 	          onChange={ this.handleInputChange } /><br></br>
						 	        <textarea
												className='form-control'
												rows='8'
						 	          type='text'
						 	          name='content'
						 	          placeholder='Write About Your Walk...'
						 	          value={ this.state.content }
						 	          onChange={ this.handleInputChange } /><br></br>
						 	        <input
												className='form-control'
						 	          type='hidden'
						 	          name='date'
						 	          value={Date(Date.now())} />
						 	        <button
												className='update-button'
						 	          type='submit'
						 	          value='Save Changes'>save changes</button>
						 	    </form>
								</div>
							</div>)
						: null}
					</div>
					</div>
			</div>

		)
	}
}

export default Walk;
