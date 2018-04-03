import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';

import {categoriesForRender} from '../helpers/categoriesForRender';
import Error from './Error';





class Feed extends React.Component {
	constructor(props) {
    	super(props);
	 }

	componentDidMount() {
		let preferredCategories = categoriesForRender(this.props.view, this.props);

		preferredCategories.forEach((category) => {
			this.props.getNews(category);
		}, this);
	};


	render() {
		let categoriesToRender = categoriesForRender(this.props.view, this.props);

		let groups;
		if (this.props.news && this.props.news.news) {
			groups = categoriesToRender.map((category, i) => {
				return <Group
					category={category}
					data={this.props.news.news[category]}
					key={i}
					categoryCollapse={this.props.categoryCollapse}
					numberOfStories={this.props.numberOfStories}
					history={this.props.history}
					view={this.props.view}
					activeCategory={this.props.activeCategory}
				/>;
			});

		} else {
			groups = <Error />;
		}


		return (
			<section className="feed">
				{groups}
				{/* {error} */}
			</section>
    	);
  	}
}

Feed.propTypes = {
	getNews: PropTypes.func,
	category: PropTypes.string,
	data: PropTypes.array,
	history: PropTypes.object,
	searchResults: PropTypes.func,
	categoryCollapse: PropTypes.bool,
	view: PropTypes.string,
	activeCategory: PropTypes.string,
	numberOfStories: PropTypes.number,
	news: PropTypes. object
};

export default Feed;
