import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Category = (props) => (
	<div>
		<Search 
			searchResults={false}
		/>
		<FeedContainer
			categoryCollapse={true}
			view='category'
			numberOfStories={20}
			activeCategory={props.match.params.category}
		/>
	</div>
);


export default Category;