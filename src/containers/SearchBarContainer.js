import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { updateQuery, fetchSearch } from '../actions';
import { withRouter } from 'react-router';

const getQuery = (state) => {
	return state.searchComponentFunctionality.searchQueryInput;
};

const mapStateToProps = state => ({
	query:getQuery(state)
});

const mapDispatchToProps = dispatch => ({
	updateQuery: query => dispatch(updateQuery(query)),
	fetchSearch: query => dispatch(fetchSearch(query))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar));
