import React from 'react';
import PropTypes from 'prop-types';

const Error = ({category, error}) => (
	<div className='error-component'>
		<h2>{category}</h2>
		<p>Error: {error}</p>
	</div>
);

Error.propTypes = {
	category: PropTypes.string,
	error: PropTypes.string
};


export default Error;
