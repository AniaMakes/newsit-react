import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';
import Interests from './Interests';

const PersonalView = () => (
	<div>
		<Search
			searchResults={false}
		/>
		<FeedContainer
			view='default'
			categoryCollapse={false}
			numberOfStories={5}
		/>
		<Interests />
	</div>
);

export default PersonalView;
