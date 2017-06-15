import React, {Component} from 'react'

class User extends Component {
	render() {

	{/*let userLink = `/users/${this.props.walk.userName}/walks/${this.props.walk._id}`*/}
		console.log('user props', this.props.user)

		return(
			<div className="userSection col-sm-12 col-md-3 col-lg-3">
				<img className="userImage img-circle img-responsive center-block" src={this.props.user.imgURL}></img>
					<h3 className="userName">{this.props.walk.userName}</h3>
					<h1 className="userGender">{this.props.walk.user.gender}</h1>
					<p className="userStatus">{this.props.walk.user.status}</p>
          <p className="userInterestedIn">{this.props.walk.user.interestedIn}</p>
          <p className="userBlurb">{this.props.walk.user.blurb}</p>
					{/* <h5 className="pull-right"><a className="userLink" href={userLink}>Read more...</a></h5>*/}
			</div>
		)
	}
}

export default User;
