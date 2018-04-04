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

		const groups = categories.map((category, i) => {
			console.log(category);
			console.log(this.props);
			console.log('=============================');
			if(this.props.news.news[category] != undefined){
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
			} else {
				return <Error
					category={category}
					error={this.props.news.news.error}
				 />;
			}
		});


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
