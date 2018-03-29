import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

const Group = (props) => {
	const {category, data} = props;

	let headline;

	if (category != 'general') {
		headline = <h2> Category: {category} </h2>;
	};


	return (
		<section className={'group-' + category}>
			{headline}

			{data.map((storyData, i) => {
				if (category == 'general') {
					return <StoryMain 
						storyData={storyData}
						key={i}
					/>;
				} else {
					return <Story
						storyData={storyData}
						key={i}
				/>;
				}
			})}
		</section>
	);
};

Group.propTypes = {
	category: PropTypes.string,
	data: PropTypes.array
};

export default Group;