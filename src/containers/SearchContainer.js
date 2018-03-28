import {connect} from 'react-redux';
import Search from '../components/Search';

const getQuery = (state) => {
  return state.query;
};

const mapStateToProps = state => ({
  query:getQuery(state)
});

const mapDispatchToProps = dispatch => ({
  updateQuery:query => dispatch(updateQuery(query)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
