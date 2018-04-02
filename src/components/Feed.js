import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';

class Feed extends React.Component {
	constructor(props) {
    	super(props);
 	}
	componentDidMount() {

		const JSONfromLocalStorage = localStorage.getItem('news preferences');

		const objectFromLocalStorage =  JSON.parse(JSONfromLocalStorage);

		let preferredCategories = [];

		if(objectFromLocalStorage != null){

			Object.keys(objectFromLocalStorage.preferecesObject.categoryPicker).forEach(key => {
				if(objectFromLocalStorage.preferecesObject.categoryPicker[key]){
					preferredCategories.push(key);
				}
			});
		}

		console.log('pref Cat ', preferredCategories);

		if (preferredCategories.length > 0) {
			preferredCategories.forEach((category) => {
				this.props.getNews(category);
			}, this);

		} else {
			categories.forEach((category) => {
				this.props.getNews(category);
			}, this);
		}

	};

	render() {

		const JSONfromLocalStorage = localStorage.getItem('news preferences');

		const objectFromLocalStorage =  JSON.parse(JSONfromLocalStorage);

		let preferredCategories = [];

		if(objectFromLocalStorage != null){

			Object.keys(objectFromLocalStorage.preferecesObject.categoryPicker).forEach(key => {
				if(objectFromLocalStorage.preferecesObject.categoryPicker[key]){
					preferredCategories.push(key);
				}
			});
		}

		let categoriesShown;

		if(preferredCategories.length > 0){
			categoriesShown = preferredCategories;
		} else {
			categoriesShown = categories;
		}
		// this doesn't account for those who deliberately don't check any categories in preferences!

		const groups = categoriesShown.map((category, i) => {
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
		return (
			<section className="feed">
				{groups}
			</section>
    	);
  	}
}

Feed.propTypes = {
	getNews: PropTypes.func
};

export default Feed;
