import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Default = () => (
	<div className='default-component'>
		<Search
			searchResults={false}
		/>
		<FeedContainer
			view='default'
			categoryCollapse={false}
			numberOfStories={5}
		/>
	</div>
);

export default Default;
