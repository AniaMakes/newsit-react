import { connect } from 'react-redux';
import CountrySelector from '../components/CountrySelector';
import {updateCountryCheckboxValue, countryNewsRequest} from '../actions';
import { withRouter } from 'react-router';

// const getCountryCheckboxState = state => {
// 	//only used in checkbox solution
// 	return state.updatePreferences.countryPicker;
// };

const getCountry = state => {
	console.log(state);
	return state.country;
};

const mapStateToProps = (state, ownProps) => {
	return {
		// countryPicker : getCountryCheckboxState(state),
		//countryPicker is only used in checkbox solution
		country : getCountry(state),
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	// toggleCountryCheckbox : (countryCode) => dispatch(updateCountryCheckboxValue(countryCode)),
	//toggleCountryCheckbox is only used in checkbox solution
	countryNewsRequest : country => dispatch(countryNewsRequest(country)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CountrySelector));