import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import LandingContent from '../components/LandingContent';
import Footer from '../components/Footer';

class HomePage extends Component {


  render() {
    return (
        <div className="homepage">
          <Jumbotron />
          <Nav />
          <LandingContent
            routeParams={this.props.params} />
          <Footer />
        </div>

    );
  }
}

export default HomePage;
