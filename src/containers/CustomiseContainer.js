import { connect } from 'react-redux';
import Customise from '../components/Customise';
import {updateCheckboxValue, savePreferencesToLocalStorage, updateTextboxValue} from '../actions';

const checkAndFetchLocalStorage = () => {
	let preferencesFromMemory = localStorage.getItem('news preferences');
	console.log(JSON.parse(preferencesFromMemory));
	return JSON.parse(preferencesFromMemory);
};

const getCheckboxState = state => {
	return state.updatePreferences.categoryPicker;
};

const getTextBoxState = state =>{
	console.log('getTextBoxState ', state);
	console.log(state.updatePreferences.textBox);
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
	savePreferences: (preferecesObject) => dispatch(savePreferencesToLocalStorage({preferecesObject}))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Customise);
