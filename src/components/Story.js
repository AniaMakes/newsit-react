import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Story.scss';

const Story = ({storyData}) => {
	const {url, title, description, publishedAt} = storyData;
	const temp = new Date(publishedAt);
	const date = temp.toDateString();
	const tempTimeString = temp.toTimeString();
	const tempTime = tempTimeString.split(' ');
	const time = tempTime[0].slice(0,5);
	const timeDate = time + ', ' + date;
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
			<p className='story-time'>
				{timeDate}
			</p>
		</article>

	);
};

Story.propTypes = {
	storyData: PropTypes.object
};

export default Story;
