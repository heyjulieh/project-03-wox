import React, {Component} from 'react'

class User extends Component {
	render() {

		{/*let userLink = `/users/${this.props.user.user}`*/}
		console.log('user props', this.props.user)
		return(

			<div className="userCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-3 col-lg-3">
				{/*<img className="userImage img-circle img-responsive center-block" src={this.props.user.imgURL}></img>*/}
					<h3 className="userUser">{this.props.user.userName}</h3>
				</div>
				<div className="userSection col-sm-12 col-md-9 col-lg-9">
					<h1 className="userGender">{this.props.user.gender}</h1>
					<p className="userStatus">{this.props.user.status}</p>
          <p className="userInterestedIn">{this.props.user.interestedIn}</p>
          <p className="userBlurb">{this.props.user.blurb}</p>
					{/* <h5 className="pull-right"><a className="userLink" href={userLink}>Read more...</a></h5>*/}
				</div>
			</div>
		)
	}
}

export default User;
