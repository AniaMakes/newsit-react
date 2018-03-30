import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

const Search = (props) => {
	console.log(props);
	return (
		<div>
			<SearchBarContainer />
			<SearchResultsContainer props={props}/>
		</div>
	);
};

export default Search;
