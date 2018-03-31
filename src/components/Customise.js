import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/categories';

const Customise = ({toggleCheckbox, categoryPicker}) => {

	const categorySelector = categories.map(category => {
		console.log(categoryPicker, categoryPicker[category]);
		return (
			<div key={category}>
				<label>
					<input
						type="checkbox"
						id={category}
						name={category}
						// value={true}
						checked={categoryPicker[category]}
						value={categoryPicker[category]}
						onChange={event => {
							// event.preventDefault();
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
			<form>
				{categorySelector}
				<button type="submit">Save preferences</button>
			</form>
		</div>);
};

export default Customise;
