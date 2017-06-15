import React, {Component} from 'react'
import Walk from './Walk'
import WalkList from './WalkList'


class WalkDetail extends Component {

	constructor(props) {
		super(props)
		this.state={
			  images: [],
	    	user: '',
	    	location: '',
	    	title: '',
	    	content: '',
				dateCreate: Date,
				editMode: false
		}
		this.updateWalk = this.updateWalk.bind(this);
		this.handleUpdateWalk = this.handleUpdateWalk.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.deleteWalk = this.deleteWalk.bind(this)
  };


	deleteWalk(e) {
		let targetWalk = this.state;
		e.preventDefault();
		var result = window.confirm("Are you sure you want to delete this walk?");
		if (result) {
			this.props.onWalkDelete(targetWalk);
			}
      console.log('this state is', this.state);
	}

	updateWalk(e) {
		e.preventDefault();
		this.setState({editMode: !this.state.editMode});
	}

	handleUpdateWalk(e) {

		let targetWalk = this.state

		e.preventDefault();
		// let id = this.props.uniqueID;
		let images = this.state.images.trim();
    let user = this.state.user.trim();
    let location = this.state.location.trim();
    let title = this.state.title.trim();
    let content = this.state.content.trim();
		let dateCreated = this.state.dateCreated.trim();

		this.props.onWalkUpdate(targetWalk);
		// need to include walk as a param above
		console.log('made it to handleUpdateWalk')
		this.setState({
		  editMode: !this.state.editMode,
		  images: '',
    	user: '',
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

  	if (e.target.name === 'user') {
  		this.setState({ user: e.target.value });
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

		let walkLink = `/users/${this.props.walk.user}/walks/${this.props.walk._id}`

		return(

			<div>
					 { (this.state.editMode)
						 ? (<div className="container">
			        		<div className="form-group row">
									 <form className="userList-form" onSubmit={ this.handleUpdateWalk }>
					 	        <input
											className='form-control'
					 	          type='text'
					 	          name='images'
					 	          placeholder='Link to images...'
					 	          value={ this.state.images}
					 	          onChange={ this.handleInputChange } /><br></br>
					 	        <input
											className='form-control'
					 	          type='hidden'
					 	          name='user'
					 	          value={ this.state.user }
					 	          onChange={ this.handleInputChange } />
					 	        <input
											className='form-control'
					 	          type='text'
					 	          name='location'
					 	          placeholder='Location of Walk ...'
					 	          value={ this.state.location }
					 	          onChange={ this.handleInputChange } /><br></br>
					 	        <input
											className='form-control'
					 	          type='text'
					 	          name='title'
					 	          placeholder='Choose a Title...'
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
					 	          value={Date.now()} />
					 	        <input
					 	          type='submit'
					 	          value='Save Changes' />
					 	    </form>
							</div>
						</div>)
					: null}
				</div>
		)
	}

}

export default WalkDetail;
