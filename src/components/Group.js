import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

const Group = (props) => {
	const {category, data, searchResults, categoryCollapse, numberOfStories, history, view} = props;

	const viewToRender = <div className={categoryCollapse ? 'hidden' : 'stories-show' }>
		{data.map((storyData, i) => {
			if (view === 'default' && category == 'general') {
				return <StoryMain 
					storyData={storyData}
					key={i}
				/>;
			} else {
				return <Story
					storyData={storyData}
					key={i}
				/>;
			}
		})}	
		<button
			onClick={event => {
				history.push('/category');
			}}
		> More </button>
	</div>;

	return (
		<section className={'group-' + category}>
			<h2> Category: {category} </h2>
			{viewToRender}
		</section>
	);
};

Group.propTypes = {
	category: PropTypes.string,
	data: PropTypes.array
};

export default Group;