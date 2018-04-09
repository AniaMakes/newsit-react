import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { requestNews, searchInterest } from '../actions/';
import { withRouter } from 'react-router';

const getNews = (state) => {
	let workingState = Object.assign({}, state);
	Object.keys(workingState.news).forEach(item => {
		workingState.news[item] = state.news[item];
	});
	//console.log('FeedContainer returned newsObject: ', workingState.news);
	return workingState.news;
};

const getPreferences = (state) => {
	let returning;
	if (state.savePreferences.hasOwnProperty('preferences')){
		returning = Object.assign({}, state.savePreferences.preferences.preferencesObject);
	}

	return returning;
};

const mapStateToProps = (state, ownProps) => {
	return {
		news : getNews(state),
		savedPreferences: getPreferences(state),
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	getNews: (category) => dispatch(requestNews(category)),
	searchInterest: (query) => dispatch(searchInterest(query))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Feed));
