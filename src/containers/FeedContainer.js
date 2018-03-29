import {connect} from 'react-redux';
import Feed from '../components/Feed';
import {requestNews} from '../actions/';


const getNews = (state) => {
	console.log('state in getNews ', state);
	let workingState = Object.assign({}, state);

	Object.keys(workingState.news).forEach(item => {
		console.log('content in getNews ', item, state.news[item]);
		workingState.news[item] = state.news[item];
	});

	console.log('working state ', workingState);

	return workingState;
};

const mapStateToProps = state => {
	// console.log('state in mapStateToProps ', state);

	// Object.keys(state.news).forEach(item => {
	// 	console.log('content in getNews ', item, state.news[item]);
	// 	return [item]
	// });


	return {
	news : getNews(state)
	};

};

const mapDispatchToProps = dispatch => ({
	getNews: (category) => dispatch(requestNews(category))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);