import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const Interests = (props) => {
	const {articles} = props;
	console.log(articles);

	return (
		<section>
			<h3 className='interests-block-header'> News related to your Interests</h3>		
			{articles.map((storyData, i) => {
				return <Story
					storyData={storyData}
					key={i}
				/>;
			})}
		</section>
	);
};

Interests.propTypes = {
	articles: PropTypes.array,
	props: PropTypes.object
};

export default Interests;
