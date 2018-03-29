import React from 'react';
import PropTypes from 'prop-types';


const StoryMain = ({ storyData }) => {
	const {
		url, urlToImage, title, description,
	} = storyData;
	return (
		<a href={url}>
			<article className='story-main-item'>
				<img width='150' height='150' className='story-main-img' src={urlToImage} alt={`image for${title}`}/>
				<h3 className="story-main-title">
					{title}
				</h3>
				<p className='story-main-description'>
					{description}
				</p>
			</article>
		</a>
	);
};

StoryMain.propTypes = {
	storyData: PropTypes.object,
};

export default StoryMain;
