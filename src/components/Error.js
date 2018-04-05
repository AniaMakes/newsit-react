import React from 'react';
import PropTypes from 'prop-types';

const Error = ({category, error}) => (
	<div className='error-component'>
		<h2>{category}</h2>
		<p>Error: {error}</p>
		<button onClick={event => {
			window.location.reload();
		}}
		> Try again </button>
	</div>
);

Error.propTypes = {
	category: PropTypes.string,
	error: PropTypes.string
};


export default Error;
