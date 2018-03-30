import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { updateQuery,searchRequest } from '../actions';
import { withRouter } from 'react-router';

const getQuery = (state) => {
	return state.query;
};

const mapStateToProps = state => ({
	query:getQuery(state)
});

const mapDispatchToProps = dispatch => ({
	updateQuery: query => dispatch(updateQuery(query)),
	searchRequest: query => dispatch(searchRequest(query))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar));
