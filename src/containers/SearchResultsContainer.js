import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
// import{} from '../actions';

const getResults = state => {
  console.log(state.search[state.results]);
    return state.search[state.query] || [];
};

const mapStateToProps = state => ({
  articles: getResults(state)
});

// const mapDispatchToProps = dispatch => ({
//   getResults
// })

export default connect(
  mapStateToProps
)(SearchResults);
