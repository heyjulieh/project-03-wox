import React, {Component} from 'react'
import Walk from './Walk'

class WalkList extends Component {

	render() {
		let walksArray = this.props.walks.map( (walk) => {
			return (
				<Walk
					key={walk._id}
					uniqueId={walk['_id']}
					onWalkDelete={this.props.onWalkDelete}
					onWalkUpdate={this.props.onWalkUpdate}
					user={[walk.userName]}
					dateCreated={[walk.dateCreated]}
					location={[walk.location]}
					content={[walk.content]}
					walk={walk}
					className="walkCard"
					/>
			)
		})

		return(
			<div className="walksList container">
				<div className="row">
					{walksArray}
				</div>
			</div>
		)
	}
}

export default WalkList;
