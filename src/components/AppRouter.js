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



	// componentDidMount(){
	// 	loadState('news preferences');
	// };


	render(){
		const defaultView =	<div>
			<NavBar />
			<Route exact path='/' component={Default} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customise' component={CustomiseContainer} />
		</div>;

		const personalView = 	<div>
			<NavBar />
			<Route exact path='/' component={PersonalView} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customise' component={CustomiseContainer} />
		</div>;

		const JSONfromLocalStorage = localStorage.getItem('news preferences');

		const objectFromLocalStorage =  JSON.parse(JSONfromLocalStorage);

		let displayed;

		if(objectFromLocalStorage != null){
			displayed = personalView;
		} else {
			displayed = defaultView;
		}

		return (
			<Router>
				<ScrollToTop>
					{displayed}
				</ScrollToTop>
			</Router>

		);
	}

};






export default AppRouter;
