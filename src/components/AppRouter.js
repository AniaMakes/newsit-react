import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import CustomiseContainer from '../containers/CustomiseContainer';
import ErrorWrapper from './ErrorWrapper';


const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				{/*<li><Link to='/category'>Link to Category</Link></li>*/}
				<li><Link to='/customise'>Customise</Link></li>
			</ul>

			<hr/>

			<Route exact path='/' component={Default} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customise' component={CustomiseContainer} />
			<Route path='/error' component={ErrorWrapper} />
		</div>
	</Router>

);


export default AppRouter;
