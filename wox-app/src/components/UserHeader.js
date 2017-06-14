import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase';
import User from './User'


class UserHeader extends Component {
	constructor(props){
		super(props)
		this.state={
      currentUser: null,
			imgUrl:'',
			photoURL: '',
			displayName: '',
      gender: '',
      status: '',
      interestIn: '',
      blurb: '',

		}

	}
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // set currentUser in App component state
        this.setState({ currentUser: currentUser, photoURL: currentUser.photoURL, displayName: currentUser.displayName });
        // currentUserData=currentUser;
        // console.log(currentUserData);
        console.log('currentUser displayName', currentUser.displayName)
      } else {
        this.setState({ currentUser: null });
      }
    })
  }


	render() {
		return(
			<div className="user-header col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img src={this.state.imgURL}></img>
					<h4 className="User">{this.state.userName}</h4>
          <p>{this.state.gender}</p>
          <p>{this.state.status}</p>
          <p>{this.state.interestedIn}</p>
          <p>{this.state.blurb}</p>
				</div>
				<div>
					<button>Posts</button>
					<button>Account</button>
					<button>Settings</button>
				</div>
			</div>


		)
	}
}

export default UserHeader;
