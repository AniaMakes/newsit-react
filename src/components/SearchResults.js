import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import ErrorContainer from '../containers/ErrorContainer';

const SearchResults = (props) => {
	const {articles} = props;
	const {searchResults} = props.props;
	if(Array.isArray(articles)) {
		return (
			<section className={searchResults ? 'stories-show' : 'hidden'}>
				<h3> Found: </h3>		
				{articles.map((storyData, i) => {
					return <Story
						storyData={storyData}
						key={i}
					/>;
				})}
			</section>
		);
	} else {
		return <ErrorContainer
			category='Search failed'
			error='sorry, nothing found'
			route='/default'
		/>;
	}
};

SearchResults.propTypes = {
	articles: PropTypes.array,
	props: PropTypes.object
};

export default SearchResults;
