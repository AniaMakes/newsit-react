import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import CustomiseContainer from '../containers/CustomiseContainer';
import NavBar from './NavBar';


const AppRouter = () => (
	<Router>
		<div>
			<NavBar />
			<Route exact path='/' component={Default} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customise' component={CustomiseContainer} />
		</div>
	</Router>

);


export default AppRouter;
