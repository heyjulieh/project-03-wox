import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';

class Home extends Component {


  render() {
    return (
        <div className="homepage">
          <Jumbotron />
          <Nav />
        </div>

    );
  }
}

export default Home;
