import React from 'react'
import { Route } from 'react-router'
import HomePage from '../views/HomePage'
import MessagesPage from '../views/MessagesPage'
import UserPage from '../views/UserPage'
import WalksPage from '../views/WalksPage'

var routes = (
	<div>
		<Route path='/' component={HomePage} />
		<Route path='/walks' component={WalksPage} />
		<Route path='/users/:userName' component={UserPage}/>
		<Route path='/users/:userName/messages/' component={MessagesPage}/>
	</div>
)

// get :uid from nav bar (firebase)
// add :uid to to user route path


export default routes;
