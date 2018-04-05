import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';
import {categoriesForRender} from '../helpers/categoriesForRender';
import ErrorContainer from '../containers/ErrorContainer';

class Feed extends React.Component {
	constructor(props) {
    	super(props);
	 }
	componentDidMount() {
		let preferredCategories = categoriesForRender(this.props.view, this.props);
		preferredCategories.forEach((category) => {
			this.props.getNews(category);
		}, this);
		if (this.props.savedPreferences != undefined) {
			if (this.props.savedPreferences.textBox.Interests != '') {
				let interestsString = this.props.savedPreferences.textBox.Interests;
				let interestsArray = interestsString.replace(/\s/g, '').split(',');
				interestsArray.forEach(interest => {this.props.searchInterest(interest);});
			};
		};
	};

	render() {
		let categoriesToRender = categoriesForRender(this.props.view, this.props);
		const groups = categoriesToRender.map((category, i) => {
			if(Array.isArray(this.props.news[category])) {
				return <Group
					category={category}
					data={this.props.news[category]}
					key={i}
					categoryCollapse={this.props.categoryCollapse}
					numberOfStories={this.props.numberOfStories}
					history={this.props.history}
					view={this.props.view}
					activeCategory={this.props.activeCategory}
				/>;
			} else {
				return <ErrorContainer
					category={category}
					error='sorry, something went wrong :('
				 />;
			}
		});

		return (
			<section className="feed">
				{groups}
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
	news: PropTypes. object,
	savedPreferences: PropTypes.object,
	searchInterest: PropTypes.func
};

export default Feed;
