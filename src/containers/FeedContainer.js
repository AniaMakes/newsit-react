import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { requestNews } from '../actions/';
import { withRouter } from 'react-router';

const getNews = (state) => {
	// console.log(state);
	let workingState = Object.assign({}, state);
	Object.keys(workingState.news).forEach(item => {
		workingState.news[item] = state.news[item];
	});
	return workingState;
};

const getError = ({error}) => error;

const mapStateToProps = (state, ownProps) => {
	return {
		news : getNews(state),
		error : getError(state),
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
