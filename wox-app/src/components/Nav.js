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
                    <li><a href="/walks/top-walks">Top Walks</a></li>
                    <li><a href="/walks/meetups">WalkUps</a></li>
                    <li><a href="/walks/blog">WalkBlog</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="pull-right">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">You<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/messages">Messages</a></li>
                    <li><a href="/user/:userId/walks">Your Walks</a></li>
                    <li><a href="/user/:userId/friends">Walking Buds</a></li>
										<li><a href="#">Signout</a></li>
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
