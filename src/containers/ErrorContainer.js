import { connect } from 'react-redux';
import Error from '../components/Error';
import { receiveError } from '../actions';
import { withRouter } from 'react-router';

const getError = state => {
	return state.error;
};

const mapStateToProps = (state, props, ownProps) => {
	return {
		error: props.error,
		ownProps
	};
};

export default withRouter(connect(
	mapStateToProps,
)(Error));
