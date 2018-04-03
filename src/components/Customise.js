import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/categories';

const Customise = ({toggleCheckbox, categoryPicker, savePreferences, updateTextbox, textBox}) => {

	// do NOT change words inside textInputsArray, as they are used as hooks for naming when setting state in reducer (see textBox object in updatePreferences reducer - the keys in that object and the words in textInputsArray need to match)
	const textInputsArray = ['Interests', 'Ignore'];


	const textInputs = textInputsArray.map(type => {
		return (
			<div key={type}>
				<label>
					{type}
					<input
						onChange={(event) => {
							event.preventDefault();
							updateTextbox(event.target.name , event.target.value);
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
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					let preferencesObject = {
						categoryPicker,
						textBox
					};
					savePreferences(preferencesObject);
				}}>
				{categorySelector}
				{textInputs}
				<button type="submit">Save preferences</button>
			</form>
		</div>);
};

Customise.propTypes = {
	toggleCheckbox: PropTypes.func,
	categoryPicker: PropTypes.object,
	savePreferences: PropTypes.func,
	updateTextbox: PropTypes.func,
	textBox: PropTypes.object
};

export default Customise;
