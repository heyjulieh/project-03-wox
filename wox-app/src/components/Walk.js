import React, {Component} from 'react'


class Walk extends Component {

	render() {

	  let cardDivClass;
	  if (this.props.walk.important === true) {
	  	 cardDivClass = `parallax walkCard col-sm-12 col-md-6 col-lg-8 ${this.props.walk.important}`
	  }
	  else {
	  	 cardDivClass = `parrallax walkCard col-sm-12 col-md-6 col-lg-4 ${this.props.walk.important}`
	  }

	  let walkLink = `/walk/${this.props.walk._id}`

		return(

			<div className={cardDivClass}>
				<a href={cityLink}>
				<img alt={this.props.walk.title} src={this.props.walk.images[0]}/>
				<h3 className="walkCardName">{this.props.props.title}</h3>
				</a>
			</div>

		)
	}
}

export default Walk;
