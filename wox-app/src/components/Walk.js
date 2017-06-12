import React, {Component} from 'react'

class Walk extends Component {
	render() {

		let formattedDate = this.props.walk.date.split("T")[0];
		let truncatedText = this.props.walk.text.substring(0, 350) + '…';
		let walkLink = `/users/${this.props.walk.user}/walks/${this.props.walk._id}`

		return(

			<div className="walkCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img className="walkImage img-circle img-responsive center-block" src={this.props.walk.images[0]}></img>
					<h3 className="walkUser">{this.props.walk.user}</h3>
				</div>
				<div className="walkSection col-sm-12 col-md-12 col-lg-9">
					<h1 className="walkTitle">{this.props.walk.title}</h1>
					<p className="walkText">{truncatedText}</p>
					<h5><a href={walkLink}>Read more…</a></h5>
					<h6 className="walkDate">Posted on: {formattedDate}</h6>

				</div>
			</div>
		)
	}
}

export default Walk;
