import React from 'react';
import PropTypes from 'prop-types';


const Story = ({storyData}) => {
	const {url, title} = storyData;
	return (
		<a href={url}>
			<article className="story">
				<h3 className="story-title">
					{title}
				</h3>
			</article>
		</a>
	);
};

Story.propTypes = {
	storyData: PropTypes.object
};

export default Story;