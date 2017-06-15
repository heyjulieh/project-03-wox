import React, {Component} from 'react'

class LandingContent extends Component {
  render() {
  		return(
  			<div className="landing-content">
          <div className="row landing-row">
            <div className="container-fluid">
              <div className="col col-sm-2 top-profile">
                <a href="/users/DrWest1"><img className="profile-img" height="180px" src="https://pbs.twimg.com/profile_images/533413826222252032/ntxQDRry.jpeg"></img></a>
                <div><p className="profile">Meet Shane</p></div>
              </div>
              <div className="col col-sm-2 top-profile">
                <a href="/users/CandyMandy"><img className="profile-img" height="180px" src="http://therichest.imgix.net/wp-content/uploads/Mandy-Moore.jpg?auto=format&q=90&lossless=1"></img></a>
                <div><p className="profile">Meet Mandy</p></div>
              </div>
              <div className="col col-sm-4 top-story">
                <a href="#"><img className="profile-img" height="180px" src="http://infinitysf.org/wp-content/uploads/2013/04/TheEmbarcadero.jpg"></img></a>
                <div><p className="story">Find Cupid at the Embarcadero</p></div>
              </div>
              <div className="col col-sm-2 top-walk">
                <a href="#"><img className="profile-img" height="180px" src="http://66.media.tumblr.com/0be392f634dbc4fe245756f51aedbc99/tumblr_o6d41cUodX1r1thfzo4_250.jpg"></img></a>
                <div><p className="profile">Art Meets &hearts;</p></div>
              </div>
              <div className="col col-sm-2 top-profile">
                <a href="#"><img className="profile-img" height="180px" src="https://s-media-cache-ak0.pinimg.com/originals/83/40/1e/83401eb04bead1dd7e999c72f50a5c34.jpg"></img></a>
                <div><p className="profile">Meet CL</p></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-fluid">
              <div className="col col-sm-2 top-profile">
                <a href="/users/Sk8boardP"><img className="profile-img" height="180px" src="https://a2-images.myspacecdn.com/images03/35/341a21c067cf4262a3fff6a95d7fb185/300x300.jpg"></img></a>
                <div><p className="profile">Meet Pharrell</p></div>
              </div>
              <div className="col col-sm-4 top-story">
                <a href="#"><img className="profile-img" height="180px" src="http://assets.fodors.com/destinations/54483/fountain-getty-villa-los-angeles-california-usa_main.jpg"></img></a>
                <div><p className="story">Getting Away for the Day at the Getty Villa</p></div>
              </div>
              <div className="col col-sm-2 top-walk">
                <a href="#"><img className="profile-img" height="180px" src="https://s-media-cache-ak0.pinimg.com/736x/ec/9d/9b/ec9d9b7a8aa9c6ebf68ad16638ec812d.jpg"></img></a>
                <div><p className="profile">Musclemen + Sun</p></div>
              </div>
              <div className="col col-sm-2 top-profile">
                <a href="#"><img className="profile-img" height="180px" src="http://www.calentertainment.com/wp-content/uploads/2012/12/bear_grylls_headshot11.jpg"></img></a>
                <div><p className="profile">Meet Bear</p></div>
              </div>
              <div className="col col-sm-2 top-profile">
                <a href="#"><img className="profile-img" height="180px" src="https://pbs.twimg.com/profile_images/556547358444765184/7XUECB41.jpeg"></img></a>
                <div><p className="profile">Meet Donald</p></div>
              </div>
            </div>
          </div>
        </div>
  		)
  	}
  }
  export default LandingContent;
