import React from 'react';
import PropTypes from 'prop-types';


const StoryMain = ({ storyData }) => {
	const {
		url, urlToImage, title, description,
	} = storyData;
	return (
		<article className='story-main-item'>
			<a href={url} target='_blank'>
				<h3 className="story-main-title">
					{title}
				</h3>
			</a>
			<p className='story-main-description'>
				{description}
			</p>
			<img width='150' height='150' className='story-main-img' src={urlToImage} alt={`image for${title}`}/>
		</article>	
	);
};

StoryMain.propTypes = {
	storyData: PropTypes.object,
};

export default StoryMain;
