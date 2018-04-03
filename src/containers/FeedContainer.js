import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { requestNews } from '../actions/';
import { withRouter } from 'react-router';

const getNews = (state) => {
	let workingState = Object.assign({}, state);
	Object.keys(workingState.news).forEach(item => {
		workingState.news[item] = state.news[item];
	});
	console.log(workingState);
	return workingState;
};

const mapStateToProps = (state, ownProps) => {
	return {
		news : getNews(state),
		savedPreferences: state.savePreferences.preferences.preferencesObject,
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	getNews: (category) => dispatch(requestNews(category))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Feed));
