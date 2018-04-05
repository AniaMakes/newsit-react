import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/main.scss';



const Story = ({storyData}) => {
	const {url, title, description} = storyData;
	return (
		<article className='story'>
			<a href={url} target='_blank'>
				<h3 className='story-title'>
					{title}
				</h3>
			</a>
			<p className='story-description'>
				{description}
			</p>
		</article>

	);
};

Story.propTypes = {
	storyData: PropTypes.object
};

export default Story;
