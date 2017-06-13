import React, {Component} from 'react'


class WalkDetail extends Component {

	constructor(props) {
		super(props)
		this.state={
			  images: '',
	    	user: '',
	    	location: '',
	    	title: '',
	    	content: '',
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
    if (!images || !user || !location || !title || !content) {
      return;
		}
		this.props.onWalkUpdate(targetWalk);
		// need to include walk as a param above
		console.log('made it to handleUpdateWalk')
		this.setState({
		  editMode: !this.state.editMode,
		  images: '',
    	user: '',
    	location: '',
    	title: '',
    	content: ''
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
  			<div className="walkCardDetail col-sm-12 col-md-12 col-lg-12">
  				<div className="userSection col-sm-12 col-md-12 col-lg-3">
  					<img className="walkImage img-circle img-responsive center-block" src={this.props.walk.images}></img>
  					<h3 className="walkUser">{this.props.walk.user}</h3>
  				</div>
  				<div className="walkSection col-sm-12 col-md-12 col-lg-9">
  					<h1 className="walkTitle">{this.props.walk.title}</h1>
  					<p className="walkContent">{this.props.walk.content}</p>
  					<h6 className="walkDate">Walked on: {this.props.walk.dateCreated}</h6>

  					<button className='btn btn-default' onClick={this.updateWalk}><span className="glyphicon glyphicon-pencil" aria-hidden="true">EDIT</span></button>
  					<button className='btn btn-warning' onClick={this.deleteWalk}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
  				</div>
  			</div>
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
			</div>
		)
	}

}

export default WalkDetail;
