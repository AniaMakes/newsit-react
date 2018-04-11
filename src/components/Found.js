import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Found = () => (
	<div className="found-component stick-footer">
		<Search searchResults={true} />
		<FeedContainer view="found" categoryCollapse={true} numberOfStories={18} />
	</div>
);

export default Found;
