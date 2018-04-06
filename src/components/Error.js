import React from 'react';
import PropTypes from 'prop-types';

const Error = ({category, error, history, route, buttonText}) => (
	<div className='error-component'>
		<h2>{category}</h2>
		<p>{error}</p>
		<button onClick={event => {
			history.push(route);
		}}
		> {buttonText} </button>
	</div>
);

Error.propTypes = {
	category: PropTypes.string,
	error: PropTypes.string,
	history: PropTypes.object,
	route: PropTypes.string,
	buttonText: PropTypes.string
};


export default Error;
