import { connect } from 'react-redux';
import CountrySelector from '../components/CountrySelector';
import {countryNewsRequest} from '../actions';
import { withRouter } from 'react-router';

const getCountry = state => {
	return state.country;
};

const mapStateToProps = (state, ownProps) => {
	return {
		country : getCountry(state),
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	countryNewsRequest : country => dispatch(countryNewsRequest(country)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CountrySelector));