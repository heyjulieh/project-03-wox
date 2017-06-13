import React, { Component } from 'react';
import '../index.css';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import MessageContainer from '../containers/MessageContainer';
import Footer from '../components/Footer';

class MessagesPage extends Component {
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
    if(this.state.currentUser){
      return (
        <div className="messagepage">
          <Jumbotron
            onGetUserData={this.getUserData.bind(this)}/>
          <Nav />
          <MessageContainer routeParams={this.props.params}/>
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div>
          <h3>"You do not have access to this page. Please log in."</h3>
        </div>
      )
    }
  }
}

export default MessagesPage;
