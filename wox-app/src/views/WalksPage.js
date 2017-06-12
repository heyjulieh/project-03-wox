import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import WalkContainer from '../components/WalkList';
import Footer from '../components/Footer';

class WalksPage extends Component {
  constructor() {
    super();
    this.state = {
      walkData: []
    }
  }
  getWalkData(wData) {
    this.setState({walkData : wData})
  }

  render() {
    return (
        <div className="walkspage">
          <Jumbotron
            onGetUserData={this.getUserData.bind(this)}/>/>
          <Nav />
          <WalkContainer routeParams={this.props.params}/>
          <Footer />
        </div>

    );
  }
}

export default WalksPage;
