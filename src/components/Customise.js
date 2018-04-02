import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/categories';

const Customise = ({toggleCheckbox, categoryPicker, savePreferences, updateTextbox, textBox}) => {

	console.log(textBox);

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
		console.log(categoryPicker, categoryPicker[category]);
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
							console.log(event.target.name);
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
					let preferecesObject = {
						categoryPicker,
						textBox
					};
					console.log(preferecesObject);
					savePreferences(preferecesObject);
				}}>
				{categorySelector}
				{textInputs}
				<button type="submit">Save preferences</button>
			</form>
		</div>);
};

export default Customise;
