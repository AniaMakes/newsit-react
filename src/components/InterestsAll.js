import React from 'react';
import PropTypes from 'prop-types';
import Interest from './Interest';

const InterestsAll = (props) => {
	const groups = Object.keys(props.allInterests).map((interest, i) => {
		return <Interest 
			articles={props.allInterests[interest]}
			key={i}
			interest={interest}
		/>;
	});
	return (
		<section>
			{groups}
		</section>
	);
};

InterestsAll.propTypes = {
	props: PropTypes.object
};

export default InterestsAll;