import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav'
import UserHeader from '../components/UserHeader'
import WalkContainer from '../containers/WalkContainer'
import Footer from '../components/Footer'

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }

  }

  getUserData(uData) {
    this.setState({userData : uData})
  }

  render() {

    return (
      <div className="userpage">
        <Jumbotron
          onGetUserData={this.getUserData.bind(this)}/>
        <Nav />
        <UserHeader />
        <WalkContainer />
        <Footer />
      </div>
    )
  }
}

export default UserPage;

// displayName={nav.props.currentUser.displayName}
// displayImage={nav.props.currentUser.photoURL}

{/*getUserData={this.handleGetUserData.bind(this)} put this in nav component later*/}
