import React from 'react';
import PropTypes from 'prop-types';
import StoryMain from './StoryMain';

const GroupMain = ({ categoryData }) => (
		<section className='group-main'>
			{categoryData.map((storyData, i) => <StoryMain
					storyData={storyData}
					key={i}
				/>)};
		</section>
);

GroupMain.propTypes = {
  categoryData: PropTypes.object,
};

export default GroupMain;
