import React from 'react';

const Error = ({category, error}) => (
	<div className='error-component'>
		<h2>Category: {category}</h2>
		<p>This is an error</p>
		<p>Error: {error}</p>
	</div>
);


export default Error;
