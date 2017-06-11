import React, {Component} from 'react'
import Walk from './Walk'

class WalkList extends Component {

	render() {

		let walksArray = this.props.walks.map( (walk) => {

			return (
				<City
					key={walk._id}
					walk={walk}
					className={walk.important} />
			)
		})

		return(

			<div className="walksGrid container-fluid">
				<div className="row">
				<h1>Explore Walks</h1>

					{walksArray}
				</div>
			</div>

		)
	}
}

export default WalkList;
