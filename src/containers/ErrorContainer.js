import { connect } from 'react-redux';
import Error from '../components/Error';
import { receiveError } from '../actions';
import { withRouter } from 'react-router';

const getError = state => {
	return state.error;
};

const mapStateToProps = (state, props) => {
	return {
		error: props.error
	};
};

export default withRouter(connect(
	mapStateToProps,
)(Error));
