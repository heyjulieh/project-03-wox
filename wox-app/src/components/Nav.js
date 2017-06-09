import React, {Component} from 'react'
class Nav extends Component {
  render() {
  		return(
  			<nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
							<a href="http://localhost:3001" className="navbar-brand" >Home</a>
              	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="glyphicon glyphicon-th-list"></span>
              	</button>
        		</div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Top Walks<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="https://www.facebook.com">Amsterdam</a></li>
                    <li><a href="https://www.twitter.com">Dubai</a></li>
                    <li><a href="https://www.instagram.com">Reykjavik</a></li>
										<li><a href="https://www.instagram.com">San Francisco</a></li>
										<li><a href="https://www.instagram.com">Tokyo</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Top Walks<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="https://www.facebook.com">Amsterdam</a></li>
                    <li><a href="https://www.twitter.com">Dubai</a></li>
                    <li><a href="https://www.instagram.com">Reykjavik</a></li>
										<li><a href="https://www.instagram.com">San Francisco</a></li>
										<li><a href="https://www.instagram.com">Tokyo</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  		)
  	}
  }

  export default Nav;
