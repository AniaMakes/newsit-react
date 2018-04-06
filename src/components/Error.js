import React from 'react';
import PropTypes from 'prop-types';

const Error = ({category, error, history,route}) => {
	return (
		<div className='error-component'>
			<h2>{category}</h2>
			<p>Error: {error}</p>
			<button onClick={event => {
				history.push(route);
			}}
			> Try again </button>
		</div>
	);
};

Error.propTypes = {
	category: PropTypes.string,
	error: PropTypes.string,
	history: PropTypes.object,
	route: PropTypes.string
};


export default Error;
