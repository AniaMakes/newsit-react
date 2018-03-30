import { connect } from 'react-redux';
import Customise from '../components/Customise';
import {updateCheckboxValue} from '../actions';

const getCheckboxState = state =>{
	return state.updatePreferences.categoryPicker;
};

const mapStateToProps = state => {
	return {
		categoryPicker : getCheckboxState(state)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleCheckbox : (category) => dispatch(updateCheckboxValue(category))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Customise);
