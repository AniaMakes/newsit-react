import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import ErrorContainer from '../containers/ErrorContainer';
import '../../styles/Interest.scss';

const Interest = (props) => {
	const {articles, interest} = props;
	if(Array.isArray(articles)) {
		return (
			<section>
				<h3 className='interests-block-header'> News related to your interest in "<b className='interest-bold'>{interest}</b>"</h3>
				<div className='results-wrapper'>		
					{articles.map((storyData, i) => {
						return <Story
							storyData={storyData}
							key={i}
						/>;
					})}
				</div>
			</section>
		);
	} else {
		return <ErrorContainer
			category='Search failed'
			error='Sorry, no results for this search. Try changing your search terms'
			buttonText='Try again'
			route='/customise'
		/>;
	}

};

Interest.propTypes = {
	articles: PropTypes.array,
	interest: PropTypes.string
};

export default Interest;
