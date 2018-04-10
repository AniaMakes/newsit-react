import React from 'react';
import Search from './Search';
import FeedContainer from '../containers/FeedContainer';
import PropTypes from 'prop-types';

const Category = (props) => (
	<div className='category-component'>
		<Search
			searchResults={false}
		/>
		<FeedContainer
			categoryCollapse={true}
			view='category'
			numberOfStories={18}
			activeCategory={props.match.params.category}
		/>
	</div>
);

Category.propTypes = {
	match: PropTypes.object
};

export default Category;
