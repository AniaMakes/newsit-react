import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const Group = ({category, categoryData}) => {
	return (
		<section className={'group-' + category}>
			{categoryData.map((storyData, i) => {
				return <Story
					storyData={storyData}
					key={i}
				/>;
			})}
		</section>
	);
};

Group.propTypes = {
	category: PropTypes.string,
	categoryData: PropTypes.object
};

export default Group;