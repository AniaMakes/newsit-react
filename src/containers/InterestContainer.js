import { connect } from 'react-redux';
import Interests from '../components/Interests';

const getResults = state => {
	return state.receiveInterest.results;
};

const mapStateToProps = (state, ownProps) => ({
	articles: getResults(state),
	ownProps
});

export default connect(
	mapStateToProps
)(Interests);