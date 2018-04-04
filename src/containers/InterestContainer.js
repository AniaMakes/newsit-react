import { connect } from 'react-redux';
import InterestsAll from '../components/InterestsAll';

const getResults = state => {
	return state.receiveInterest;
};

const mapStateToProps = (state) => ({
	allInterests: getResults(state)
});

export default connect(
	mapStateToProps
)(InterestsAll);