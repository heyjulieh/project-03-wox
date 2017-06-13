import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase';

class Jumbotron extends Component {
  constructor(props) {
		super(props);
		this.state = {
      photoURL: '',
			currentUser: null,
      loggedIn: false
		}
    this.handleGetUserData = this.handleGetUserData.bind(this)
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)

	}

	componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser: currentUser, photoURL: currentUser.photoURL });
        // currentUserData=currentUser;
        // console.log(currentUserData);
        console.log(this.state, "logging");
      } else {
        this.setState({ currentUser: null });
      }
    })
  }

	loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);
	}

  componentDidMount() {
    setInterval(this.handleGetUserData, 3000);
  }

  handleGetUserData() {

    var uData = this.state.currentUser;

    () => {
      console.log('clicked test button');
      this.props.onGetUserData(uData)
    }
  }

	logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
	}

  render() {

    if(this.state.currentUser){
  		return(
        <div className="jumbotron">
          <div className="log pull-right">
            <a href="#"><img id="profile-pic" src={this.state.photoURL}/></a>
            <button type="submit" className="logout" onClick={this.logoutButtonClicked}>logout</button>
            <a href ="#"><span className="glyphicon glyphicon-envelope"/></a>
            <span className="message-counter">
              10
            {/* need to pull in counter for messages received*/}
            </span>
          </div>
          <h2>W O X</h2>
        </div>
  		)
    }
    else {
      return(
        <div className="jumbotron">
          <div className="log pull-right">
            <button type="submit" className="login" onClick={this.loginButtonClicked}>login</button>
          </div>
          <h2>W O X</h2>
        </div>

      )
    }
  }
}
export default Jumbotron;
