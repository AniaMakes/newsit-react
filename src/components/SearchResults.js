import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const SearchResults = ({articles}) => {

	return (
		<section>
			{articles.map((storyData, i) => {
				return <Story
					storyData={storyData}
					key={i}
				/>;
			})}
		</section>
	);
};

SearchResults.propTypes = {
	articles: PropTypes.array,
	getResults: PropTypes.func
};

export default SearchResults;
