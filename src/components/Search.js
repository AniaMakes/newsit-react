import React from 'react';
import PropTypes from 'prop-types';

const Search = ({query, updateQuery, searchRequest}) => {
  return (
    <form
      onSubmit={event =>{
        event.preventDefault();
        searchRequest(query);
      }}
      >
      <input
        type="text"
        name="query"
        placeholder="Search.."
        onChange={event => updateQuery(event.target.value)}
        value={query}
       />
      <button type="submit">Search</button>
    </form>
  );

};

Search.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func.isRequired,
  searchRequest: PropTypes.func.isRequired
};

export default Search;
