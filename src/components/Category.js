import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';

const Category = () => (
	<div>
		<Search 
			searchResults={false}
		/>
		<FeedContainer
			/*categoryCollapse={true}*/
			view='category'
			numberOfStories={20}
		/>
	</div>
);


export default Category;