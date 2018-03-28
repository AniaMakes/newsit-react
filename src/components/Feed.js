import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';

class Feed extends React.Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		categories.forEach((category) => {
			this.props.getNews(category);
		}, this);
	};

	render() {
		console.log('props in Feed.js: ', this.props);
		const groups = categories.map(category => {
			console.log('category ', category);
			return <Group
				category={category}
				data={this.props.news.news[category]}
			/>;
		});
		return (
			<section className="feed">
				{groups}
			</section>
		);
	};
};


Feed.propTypes = {
	// generalNews: PropTypes.object,
	getNews: PropTypes.func
};


export default Feed;