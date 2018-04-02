import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

const Group = (props) => {
	const {
		category,
	 		data, 
	 		searchResults,
	 		categoryCollapse,
	 		numberOfStories,
	 		history,
	 		view,
	 		activeCategory
	} = props;

	let filteredData;
	if (view === 'default' && category == 'general') {
		filteredData = data.filter((story) => {
			return data.indexOf(story) <= 2;
		});
	} else {
		filteredData = data.filter((story) => {
			return data.indexOf(story) <= (numberOfStories-1);
		});
	}

	const viewToRender = 
	<div className={(categoryCollapse && (category != activeCategory)) ? 'hidden' : 'stories-show' }>
		{filteredData.map((storyData, i) => {
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
			className={(category === activeCategory) ? 'hidden' : 'stories-show'} // change the class css
			onClick={event => {
				history.push(`/category/${category}`);
			}}
		> More 
		</button>
	</div>;

	return (
		<section className={'group-' + category}>
			<h2 
				className='category-heading'
				onClick={event => {
					history.push(`/category/${category}`);
				}}
			> Category: {category} 
			</h2>
			{viewToRender}
		</section>
	);
};

Group.propTypes = {
	category: PropTypes.string,
	data: PropTypes.array, 
	history: PropTypes.object,
	searchResults: PropTypes.func,
	categoryCollapse: PropTypes.bool,
	view: PropTypes.string,
	activeCategory: PropTypes.string,
	numberOfStories: PropTypes.number
};

export default Group;