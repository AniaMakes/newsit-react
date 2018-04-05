import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const Interest = (props) => {
	const {articles, interest} = props;
	return (
		<section>
			<h3 className='interests-block-header'> News related to your interest in "{interest}"</h3>		
			{articles.map((storyData, i) => {
				return <Story
					storyData={storyData}
					key={i}
				/>;
			})}
		</section>
	);
};

Interest.propTypes = {
	articles: PropTypes.array,
	props: PropTypes.object
};

export default Interest;
