import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/categories';

const Customise = ({toggleCheckbox, categoryPicker, savePreferences, updateTextbox, textBox, history, clearSavePreferences, clearUpdatePreferences, searchInterest, clearInterests}) => {
	// do NOT change words inside textInputsArray, as they are used as hooks for naming when setting state in reducer (see textBox object in updatePreferences reducer - the keys in that object and the words in textInputsArray need to match)
	const textInputsArray = ['Interests'];
	const textInputs = textInputsArray.map(type => {
		return (
			<div key={type}>
				<label>
					{type}
					<input
						onChange={(event) => {
							event.preventDefault();
							updateTextbox(event.target.name, event.target.value);
						}}
						type='text'
						name={type}
						value={textBox[type]}
					/>
				</label>
			</div>
		);
	});

	const categorySelector = categories.map(category => {
		return (
			<div key={category}>
				<label>
					<input
						type="checkbox"
						id={category}
						name={category}
						checked={categoryPicker[category]}
						value={categoryPicker[category]}
						onChange={event => {
							toggleCheckbox(event.target.name);
						}}
					/> {category}
				</label>
			</div>
		);
	});

	return (
		<div className='customise-component'>
			<h3>On this page you can customise the news that will display by default when you visit.</h3>
			<p>Your choices will be stored in your browser. By saving your preferences, you agree for this to happen. You can clear your preferences any time using the "Clear preferences" button.</p>

			<p>You can select any (or none) categories. Each category will display news relevant to that category.</p>
			<p>Furthermore, you can add any number of interests. Please use a comma to separate interests.</p>
			<p>Note: if you add interests, but no categories, only your interests will be displayed.</p>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					let preferencesObject = {
						categoryPicker,
						textBox
					};
					let ticked = 0;
					for (let cat in preferencesObject.categoryPicker) {
						if (preferencesObject.categoryPicker[cat] === true) {
							ticked += 1;
						};
					};
					if (ticked > 0 || preferencesObject.textBox.Interests != '') {
						savePreferences(preferencesObject);
						history.push('/personalised');

					};
					if (preferencesObject.textBox.Interests != '') {
						clearInterests();
						let interestsString = preferencesObject.textBox.Interests;
						let interestsArray = interestsString.replace(/\s/g, '').split(',');
						interestsArray.forEach(interest => {searchInterest(interest);});
					};
				}}>
				{categorySelector}
				{textInputs}
				<button type="submit">Save preferences</button>
			</form>
			<button onClick={(event) => {
				localStorage.clear();
				clearUpdatePreferences();
				clearSavePreferences();
				clearInterests();
				history.push('/customise');
			}}>
				Clear preferences
			</button>
		</div>);
};

Customise.propTypes = {
	toggleCheckbox: PropTypes.func,
	categoryPicker: PropTypes.object,
	savePreferences: PropTypes.func,
	updateTextbox: PropTypes.func,
	textBox: PropTypes.object,
	history: PropTypes.object,
	clearSavePreferences: PropTypes.func,
	clearUpdatePreferences: PropTypes.func,
	searchInterest: PropTypes.func,
	clearInterests: PropTypes.func
};

export default Customise;
