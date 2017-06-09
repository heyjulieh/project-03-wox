import React, {Component} from 'react'
class Footer extends Component {
  render() {
  		return(
  			<footer className="footer">
          <div className="container-fluid">
            <div className="pull-left">
              <ul className="footer-links">
                <li className="footer-links"><a className="about" href="/about">ABOUT</a></li>
                <br></br>
                <li className="footer-links"><a className="contact" href="/contact">CONTACT</a></li>
              </ul>
            </div>
            <div className="footer-header pull-right">
							<a href="http://localhost:3001" className="footer-header" >WOX</a>
        		</div>
          </div>
        </footer>
  		)
  	}
  }
  export default Footer;
