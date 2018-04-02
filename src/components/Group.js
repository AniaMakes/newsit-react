import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

const Group = (props) => {
	const {category, data, searchResults, categoryCollapse, numberOfStories, history, view, activeCategory} = props;

	const viewToRender = <div className={(categoryCollapse && (category != activeCategory)) ? 'hidden' : 'stories-show' }>
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
		<button className={(category === activeCategory) ? 'hidden' : 'stories-show'} // change the class css
			onClick={event => {
				console.log(category);
				history.push(`/category/${category}`);
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