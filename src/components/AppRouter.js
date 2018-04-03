import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import CustomiseContainer from '../containers/CustomiseContainer';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import PersonalView from './PersonalView';

import { loadState } from '../helpers/localStorage';


class AppRouter extends React.Component {
	render(){


		return (
			<Router>
				<ScrollToTop>
					<div>
						<button><Link to='/personalised'>Personalised view </Link></button>
						<NavBar />
						<Route exact path='/' component={Default} />
						<Route path='/category/:category' component={Category} />
						<Route path='/found' component={Found} />
						<Route path='/customise' component={CustomiseContainer} />
						<Route path='/personalised' component={PersonalView} />
					</div>
				</ScrollToTop>
			</Router>
		);
	}
};






export default AppRouter;
