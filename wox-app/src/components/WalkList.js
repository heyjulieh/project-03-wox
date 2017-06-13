import React, {Component} from 'react'
import Walk from './Walk'

class WalkList extends Component {

	render() {
		let walksArray = this.props.walks.map( (walk) => {
			return (
				<Walk
					key={walk._id}
					uniqueId={[walk._id]}
					user={[walk.userName]}
					walk={walk}
					className="walkCard" />
			)
		})

		return(
			<div className="walksList container">
				<h1 className="walksList">Explore Walks</h1>
				<div className="row">
					{walksArray}
				</div>
			</div>
		)
	}
}

export default WalkList;
