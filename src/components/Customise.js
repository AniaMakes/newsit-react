import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/categories';
import '../../styles/Customise.scss';

const Customise = ({
	toggleCheckbox,
	categoryPicker,
	savePreferences,
	updateTextbox,
	textBox,
	history,
	clearSavePreferences,
	clearUpdatePreferences,
	searchInterest,
	clearInterests
}) => {
	// do NOT change words inside textInputsArray, as they are used as hooks for naming when setting state in reducer (see textBox object in updatePreferences reducer - the keys in that object and the words in textInputsArray need to match)
	const textInputsArray = ['Interests'];
	const textInputs = textInputsArray.map(type => {
		return (
			<div key={type}>
				<label htmlFor={type}>{type}</label>
				<input
					placeholder="Your interests"
					onChange={event => {
						event.preventDefault();
						updateTextbox(event.target.name, event.target.value);
					}}
					type="text"
					name={type}
					id={type}
					value={textBox[type]}
				/>
			</div>
		);
	});

	const categorySelector = categories.map(category => {
		return (
			<div key={category} className="checkbox-wrap">
				<input
					type="checkbox"
					id={category}
					name={category}
					checked={categoryPicker[category]}
					value={categoryPicker[category]}
					className="category-checkbox"
					onChange={event => {
						toggleCheckbox(event.target.name);
					}}
				/>
				<label htmlFor={category} className="category-label">
					{category}
				</label>
			</div>
		);
	});

	return (
		<div className="stick-footer">
			<div className="customise-component">
				<h3>Customise your interests</h3>
				<div className='costumise-instructions'>
					<p>
					Your choices will be stored in your browser. By saving your
					preferences, you agree for this to happen. You can clear your
					preferences any time using the <strong>"Clear preferences" </strong>
					button.
					</p>

					<p>
					You can select any (or none) categories. Each category will display
					news relevant to that category.
					</p>
					<p>
					You can add any number of interests. Please use a comma to separate
					interests.
					</p>
					<p>
					Note: if you add interests, but no categories, only your interests
					will be displayed.
					</p>
				</div>
				<form
					className="category-form"
					onSubmit={event => {
						event.preventDefault();
						let preferencesObject = {
							categoryPicker,
							textBox
						};
						let ticked = 0;
						for (let cat in preferencesObject.categoryPicker) {
							if (preferencesObject.categoryPicker[cat] === true) {
								ticked += 1;
							}
						}
						if (ticked > 0 || preferencesObject.textBox.Interests != '') {
							savePreferences(preferencesObject);
							history.push('/personalised');
						}
						if (preferencesObject.textBox.Interests != '') {
							clearInterests();
							let interestsString = preferencesObject.textBox.Interests;
							let interestsArray = interestsString
								.split(',');
							interestsArray.forEach(interest => {
								let interestTrimmed = interest.trim();
								searchInterest(interestTrimmed);
							});
						}
					}}
				>
					<div className="cat-checkboxes">{categorySelector}</div>
					<div className="interests-input">{textInputs}</div>
					<div className="buttons-wrap">
						<button className="interests-btn" type="submit">
							Save preferences
						</button>
						<button
							className="interests-btn interests-btn-clear"
							onClick={event => {
								localStorage.clear();
								clearUpdatePreferences();
								clearSavePreferences();
								clearInterests();
								history.push('/customise');
							}}
						>
							Clear preferences
						</button>
					</div>
				</form>
			</div>
		</div>
	);
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
