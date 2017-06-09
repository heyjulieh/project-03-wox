import React, {Component} from 'react'
class Nav extends Component {
  render() {
  		return(
  			<nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header pull-left">
							<a href="http://localhost:3001" className="navbar-brand" >Home</a>
        		</div>
            <div className="pull-right">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Walk<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="https://www.twitter.com">Top Walks</a></li>
                    <li><a href="https://www.instagram.com">WalkUps</a></li>
                    <li><a href="https://www.facebook.com">WalkBlog</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="pull-right">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">You<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="https://www.facebook.com">Messages</a></li>
                    <li><a href="https://www.twitter.com">Your Walks</a></li>
                    <li><a href="https://www.instagram.com">Walking Buds</a></li>
										<li><a href="https://www.instagram.com">Preferences</a></li>
										<li><a href="https://www.instagram.com">Signout</a></li>
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
