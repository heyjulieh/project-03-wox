import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import UserContainer from '../containers/UserContainer';
import Footer from '../components/Footer';

class UserPage extends Component {


  render() {
    return (
        <div className="userpage">
          <Jumbotron />
          <Nav />
          <UserContainer />
          <Footer />
        </div>

    );
  }
}

export default UserPage;
