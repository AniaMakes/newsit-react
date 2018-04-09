import { connect } from 'react-redux';
import CountrySelector from '../components/CountrySelector';
import {updateCheckboxValue} from '../actions';
import { withRouter } from 'react-router';

const getCheckboxState = state => {
	return state.updatePreferences.countryPicker;
};

// const mapStateToProps = () => {
//     return {

//     };
// };

// const 

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CountrySelector));