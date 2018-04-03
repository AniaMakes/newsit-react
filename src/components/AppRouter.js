import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import CustomiseContainer from '../containers/CustomiseContainer';

import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import PersonalView from './PersonalView';
import ErrorWrapper from './ErrorWrapper';




import { loadState } from '../helpers/localStorage';


class AppRouter extends React.Component {



	// componentDidMount(){
	// 	loadState('news preferences');
	// };


	render(){
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
					<div>
						<NavBar />
						{routeOnLoad}
						<Route path='/category/:category' component={Category} />
						<Route path='/found' component={Found} />
						<Route path='/customise' component={CustomiseContainer} />
						<Route path='/personalised' component={PersonalView} />
					</div>;
				</ScrollToTop>
			</Router>

		);
	}

};



<<<<<<< HEAD
=======
			<Route exact path='/' component={Default} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customise' component={CustomiseContainer} />
			<Route path='/error' component={ErrorWrapper} />
		</div>
	</Router>
>>>>>>> 3dd90342f06526d5b5692d855ad5eaed70ac2c7b



export default AppRouter;
