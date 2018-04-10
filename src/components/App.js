import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';
import CustomiseContainer from '../containers/CustomiseContainer';
import NavBar from './NavBar';


const App = () => (
	<div>
		<NavBar />
		<CustomiseContainer />
		<Search />
		<FeedContainer />
	</div>
);

export default App;
