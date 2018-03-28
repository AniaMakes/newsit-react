import React from 'react';
import PropTypes from 'prop-types';

const Search = () => {
  return (
    <form>
      <input
        type="text"
        name="query"
        placeholder="Search.."
        onChange
        value={query}
       />
      <button type="submit">Search</button>
    </form>
  )

};

Search.propTypes = {

};

export default Search;
