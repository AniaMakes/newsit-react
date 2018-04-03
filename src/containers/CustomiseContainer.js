import { connect } from 'react-redux';
import Customise from '../components/Customise';
import {updateCheckboxValue, savePreferencesToLocalStorage, updateTextboxValue} from '../actions';

const checkAndFetchLocalStorage = () => {
	let preferencesFromMemory = localStorage.getItem('news preferences');
	return JSON.parse(preferencesFromMemory);
};

const getCheckboxState = state => {
	return state.updatePreferences.categoryPicker;
};

const getTextBoxState = state =>{
	console.log(state);
	return state.updatePreferences.textBox;
};

const mapStateToProps = state => {
	return {
		categoryPicker : getCheckboxState(state),
		textBox: getTextBoxState(state)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleCheckbox : (category) => dispatch(updateCheckboxValue(category)),
	updateTextbox : (textBoxName, texBoxInput) => dispatch(updateTextboxValue(textBoxName, texBoxInput)),
	savePreferences: (preferencesObject) => dispatch(savePreferencesToLocalStorage({preferencesObject}))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Customise);
