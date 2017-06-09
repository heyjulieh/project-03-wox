import React, { Component } from 'react';
import '../index.css';
import Nav from '../components/Nav'
class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="log pull-right">
            <button type="submit" className="signup">signup</button>
            <button type="submit" className="login">login</button>
            <a href ="#"><span className="glyphicon glyphicon-envelope"/></a>
            <span className="message-counter">
              10
            {/* need to pull in counter for messages received*/}
            </span>
          </div>
          <h2>W O X</h2>
        </div>
        <Nav />
      </div>

    );
  }
}

export default Home;
