import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';
// import ErrorWrapper from './ErrorWrapper';
import Error from './Error';

class Feed extends React.Component {
	constructor(props) {
    	super(props);
	 }
	 
	componentDidMount() {
		categories.forEach((category) => {
			this.props.getNews(category);
		}, this);
	};
	

	render() {
		console.log(this.props.news);
		let groups;
		if (this.props.news && this.props.news.news) {
			groups = categories.map((category, i) => {
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
		// const error = this.props.news.error.length > 0 ? <Error /> : null;
		return (
			<section className="feed">
				{groups}
				{/* {error} */}
			</section>
    	);
  	}
}

Feed.propTypes = {
	getNews: PropTypes.func
};

export default Feed;
