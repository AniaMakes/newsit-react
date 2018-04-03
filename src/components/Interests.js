import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const Interests = (props) => {
	const {interest} = props;



	return (
		<section className="interest">
			<h3> INTEREST </h3>
			{interest}
		</section>
	);

};

export default Interests;
