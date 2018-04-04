import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';
import InterestContainer from '../containers/InterestContainer';

const PersonalView = () => (
	<div>
		<Search
			searchResults={false}
		/>
		<FeedContainer
			view='personalised'
			categoryCollapse={false}
			numberOfStories={20}
		/>
		<InterestContainer />
	</div>
);

export default PersonalView;
