import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import CustomiseContainer from '../containers/CustomiseContainer';
import WorldNews from './WorldNews';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import PersonalView from './PersonalView';

import { loadState } from '../helpers/localStorage';

import '../../styles/main.scss';

const AppRouter = () => {
	const JSONfromLocalStorage = localStorage.getItem('news preferences');

	const objectFromLocalStorage =  JSON.parse(JSONfromLocalStorage);

	let routeOnLoad;

	if(objectFromLocalStorage != null){
		routeOnLoad = <Route exact path='/' component={PersonalView} />
		;
	} else {
		routeOnLoad = <Route exact path='/' component={Default} />
		;
	}

	return (
		<Router>
			<ScrollToTop>
				<div className='container'>
					<header>
						<div className='logo-block'>
							<h1 className='logo'>NewsIt</h1>
							<img className='logo-pic' src='/images/newsitlogo.png' />
						</div>
						<NavBar />
					</header>
					{routeOnLoad}
					<Route path='/category/:category' component={Category} />
					<Route path='/found' component={Found} />
					<Route path='/customise' component={CustomiseContainer} />
					<Route path='/personalised' component={PersonalView} />
					<Route path='/default' component={Default} />
					<Route path='/world-news' component={WorldNews} />
					<footer className='footer'>
						<p>This page uses the <a href="https://newsapi.org/">News API</a> to let you know what's happening around the world right now.</p>
					</footer>
				</div>
			</ScrollToTop>
		</Router>

	);
};


export default AppRouter;
