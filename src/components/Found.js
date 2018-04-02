import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Found = () => (
	<div>
		<Search 
			searchResults={true}
		/>
		<FeedContainer
			view='found'
			categoryCollapse={true}
			numberOfStories={20}
		/>
	</div>
);


export default Found;