import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/StoryMain.scss';

const StoryMain = ({ storyData, order}) => {
	const {
		url, urlToImage, title, description,
	} = storyData;
	console.log(typeof(order));
	return (
		<article className={classnames('story-main-item', 
			'story-main-' + order
		)}>
			<a href={url} target='_blank'>
				<h3 className="story-main-title">
					{title}
				</h3>
			</a>
			{/*			<p className='story-main-description'>
				{description}
			</p>*/}
			<img className='story-main-img' src={urlToImage} alt={`image for${title}`}/>
		</article>	
	);
};

StoryMain.propTypes = {
	storyData: PropTypes.object,
};

export default StoryMain;
