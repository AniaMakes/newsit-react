import React from 'react';

const Error = ({category, error}) => (
	<div className='error-component'>
		<h2>Category: {category}</h2>
		<p>Error: {error}</p>
	</div>
);


export default Error;
