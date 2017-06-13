import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import WalkContainer from '../containers/WalkContainer';
import WalkForm from '../components/WalkForm'
import Footer from '../components/Footer';

class WalksPage extends Component {
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
        <div className="walkpage">
          <Jumbotron
            onGetUserData={this.getUserData.bind(this)}/>
          <Nav />
          <WalkContainer routeParams={this.props.params}/>
          <Footer />
        </div>

    );
  }
}

export default WalksPage;
