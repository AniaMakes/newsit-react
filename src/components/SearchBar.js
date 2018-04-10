import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/SearchBar.scss';

const SearchBar = ({query, updateQuery, searchRequest, history}) => {
	return (
		<section className='search-bar'>
			<form
				onSubmit={event => {
					event.preventDefault();
					if (query.length>1){
						searchRequest(query);
						history.push('/found');
					}
				}}
			>
				<div className='bar-wrapper'>
					<input
						type="text"
						name="query"
						placeholder="Search news ..."
						onChange={event => updateQuery(event.target.value)}
						value={query}
						className='input-search'
					/>
					<button type='submit' className='submit-search'><i className="fas fa-search"></i></button>
				</div>
			</form>
		</section>
	);

};


SearchBar.propTypes = {
	query: PropTypes.string,
	updateQuery: PropTypes.func.isRequired,
	searchRequest: PropTypes.func.isRequired,
	history: PropTypes.object
};

export default SearchBar;
