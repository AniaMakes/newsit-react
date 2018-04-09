import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/StoryMain.scss';

const StoryMain = ({ storyData, order}) => {
	const {url, urlToImage, title, description, publishedAt} = storyData;
	const temp = new Date(publishedAt);
	const tempString = temp.toTimeString();
	const tempTime = tempString.split(' ');
	const time = tempTime[0].slice(0,5);
	return (
		<article className={classnames('story-main-item', 
			'story-main-' + order
		)}>
			<img className='story-main-img' src={urlToImage} alt={`image for${title}`}/>
			<a href={url} target='_blank'>
				<h3 className="story-main-title">
					{title}
				</h3>
			</a>
			<p className='story--main-time'>
				{time}
			</p>
			{/*			<p className='story-main-description'>
				{description}
			</p>*/}

		</article>	
	);
};

StoryMain.propTypes = {
	storyData: PropTypes.object,
	order: PropTypes.number
};

export default StoryMain;
