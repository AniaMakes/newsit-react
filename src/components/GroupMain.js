import React from 'react';
import PropTypes from 'prop-types';
import StoryMain from './StoryMain';

const GroupMain = ({categoryData}) => {
	return (
		<section className='group-main'>
			{categoryData.map((storyData, i) => {
				return <StoryMain 
					storyData={storyData}
					key={i}
				/>;
			})};
		</section>
	);
};

GroupMain.propTypes = {
	categoryData: PropTypes.object
};

export default GroupMain;