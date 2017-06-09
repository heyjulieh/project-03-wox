import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import { firebase, auth } from '../utils/firebase';

class Home extends Component {


  render() {
    return (
        <div className="homepage">
          <Jumbotron currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked }/>
          <Nav />
        </div>

    );
  }
}

export default Home;
