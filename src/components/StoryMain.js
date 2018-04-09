import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/StoryMain.scss';

const StoryMain = ({ storyData, order}) => {
	const {
		url, urlToImage, title, description, publishedAt
	} = storyData;
	const temp = new Date(publishedAt);
	const date = temp.toDateString();
	const tempTimeString = temp.toTimeString();
	const tempTime = tempTimeString.split(' ');
	const time = tempTime[0].slice(0,5);
	const timeDate = time + ', ' + date;
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
			<p className='story-time'>
				{timeDate}
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
