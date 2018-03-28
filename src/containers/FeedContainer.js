import {connect} from 'react-redux';
import Feed from '../components/Feed';
import {requestNews} from '../actions/';


const getNews = (state) => {
	// console.log(state);
	return state.news.generalNews;
};

const mapStateToProps = state => ({generalNews: getNews(state)});

const mapDispatchToProps = dispatch => ({
	getNews: () => dispatch(requestNews())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);