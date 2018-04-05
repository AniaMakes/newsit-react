import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import ErrorContainer from '../containers/ErrorContainer';

const Interest = (props) => {
	const {articles, interest} = props;
	if(Array.isArray(articles)) {
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
	} else {
		return <ErrorContainer
			category='Search failed'
			error='sorry, nothing found'
		/>;
	}

};

Interest.propTypes = {
	articles: PropTypes.array,
	interest: PropTypes.string
};

export default Interest;
