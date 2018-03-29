import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

const Group = (props) => {
	console.log(props);
	const {category, data} = props;
	console.log('in Group.js ', category, data);

	return (
		<section className={'group-' + category}>
			{data.map((storyData, i) => {
				if ({category} == 'general') {
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
	data: PropTypes.object
};

export default Group;