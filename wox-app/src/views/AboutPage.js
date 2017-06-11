import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import LandingContent from '../components/LandingContent';
import Footer from '../components/Footer';

class AboutPage extends Component {


  render() {
    return (
        <div className="aboutpage">
          <Jumbotron />
          <Nav />
          <LandingContent />
          <Footer />
        </div>

    );
  }
}

export default AboutPage;
