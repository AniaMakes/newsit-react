import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Default from './Default';
import Category from './Category';
import Found from './Found';
import Customize from './Customize';


const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				{/*<li><Link to='/category'>Link to Category</Link></li>*/}
				<li><Link to='/customize'>Customize</Link></li>
			</ul>

			<hr/>

			<Route exact path='/' component={Default} />
			<Route path='/category/:category' component={Category} />
			<Route path='/found' component={Found} />
			<Route path='/customize' component={Customize} />
		</div>	
	</Router>

);


export default AppRouter;