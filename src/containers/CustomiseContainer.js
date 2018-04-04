import { connect } from 'react-redux';
import Customise from '../components/Customise';
import {updateCheckboxValue, savePreferencesToLocalStorage, updateTextboxValue, clearUpdatePreferences, clearSavePreferences, searchInterest} from '../actions';
import { withRouter } from 'react-router';

const checkAndFetchLocalStorage = () => {
	let preferencesFromMemory = localStorage.getItem('news preferences');
	return JSON.parse(preferencesFromMemory);
};

const getCheckboxState = state => {
	return state.updatePreferences.categoryPicker;
};

const getTextBoxState = state =>{
	return state.updatePreferences.textBox;
};

const mapStateToProps = (state, ownProps) => {
	return {
		categoryPicker : getCheckboxState(state),
		textBox: getTextBoxState(state),
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	toggleCheckbox : (category) => dispatch(updateCheckboxValue(category)),
	updateTextbox : (textBoxName, texBoxInput) => dispatch(updateTextboxValue(textBoxName, texBoxInput)),
	savePreferences: (preferencesObject) => dispatch(savePreferencesToLocalStorage({preferencesObject})),
	clearUpdatePreferences: () => dispatch(clearUpdatePreferences()),
	clearSavePreferences: () => dispatch(clearSavePreferences()),
	searchInterest: (query) => dispatch(searchInterest(query))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Customise));
