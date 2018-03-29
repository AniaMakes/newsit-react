import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { requestNews } from '../actions/';

const getNews = (state) => {
	let workingState = Object.assign({}, state);

	Object.keys(workingState.news).forEach(item => {
		workingState.news[item] = state.news[item];
	});
	return workingState;
};

const mapStateToProps = state => {
	return {
		news : getNews(state)
	};
};

const mapDispatchToProps = dispatch => ({
	getNews: (category) => dispatch(requestNews(category))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Feed);
