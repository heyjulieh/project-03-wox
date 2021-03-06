import React, {Component} from 'react'
import UserWalk from './UserWalk'

class UserWalkList extends Component {

  render() {
		let walksArray = this.props.walks.map( (walk) => {
			return (
				<Walk
					key={walk._id}
					uniqueId={[walk._id]}
					user={[walk.userName]}
					createdDate={[walk.date]}
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

export default UserWalkList;
