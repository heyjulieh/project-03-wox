import React, { Component } from 'react';
import '../index.css';
import Nav from '../components/Nav';
import { firebase, auth } from '../utils/firebase';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }

  sessionButton() {
    if (!this.props.currentUser ) {
      return   <button onClick={ this.props.loginButtonClicked } type="submit" className="login" { ...this.props }>{ this.props.children }</button>;
    } else {
      return (
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <img className="profile-pic" src={ this.props.currentUser.photoURL } alt="" /> { this.props.currentUser.displayName } <span className="caret"></span>
        </a>
      )
    }
  }

  render() {
    return (
        <div className="home">
          <div className="jumbotron">
            <div className="log pull-right">
              { this.sessionButton() }
              <button onClick={ this.props.logoutButtonClicked } type="submit" className="logout">{ this.props.children }</button>
              <a href ="#"><span className="glyphicon glyphicon-envelope"/></a>
              <span className="message-counter">
                10
              {/* need to pull in counter for messages received*/}
              </span>
            </div>
            <h2>W O X</h2>
          </div>
          <Nav currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked }/>
        </div>

    );
  }
}

export default Home;
