import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import ErrorContainer from '../containers/ErrorContainer';

import classnames from 'classnames';
import '../../styles/SearchResults.scss';

const SearchResults = (props) => {
	const {articles} = props;
	const {searchResults} = props.props;
	if(Array.isArray(articles)) {
		return (
			<section className={classnames({
				'stories-show': (searchResults === true),
				'hidden': (searchResults === false)
			})}>
				<h3> Found: </h3>	
				<div className='results-wrapper'>
					{articles.map((storyData, i) => {
						return <Story
							storyData={storyData}
							key={i}
						/>;
					})}
				</div>
			</section>
		);
	} else {
		return <section className={searchResults ? 'stories-show' : 'hidden'}>
			<ErrorContainer
				category='Search failed'
				error='Sorry, no results for this search. Try searching for something else'
				buttonText='Refresh the page'
				route='/default'
			/>
		</section>;
	}
};

SearchResults.propTypes = {
	articles: PropTypes.array,
	props: PropTypes.object
};

export default SearchResults;
