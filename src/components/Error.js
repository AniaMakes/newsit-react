import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Error.scss';

const Error = ({category, error, history, route}) => (
	<div className='error-component'>
		<h2 className='error-category'>{category}</h2>
		<p>Error: {error}</p>
		<button className='btn-try-again'
			onClick={event => {
				history.push(route);
			}}
		> Try again </button>
	</div>
);

Error.propTypes = {
	category: PropTypes.string,
	error: PropTypes.string,
	history: PropTypes.object,
	route: PropTypes.string
};


export default Error;
