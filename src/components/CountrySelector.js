import React from 'react';
import PropTypes from 'prop-types';
import { countryObject } from '../constants/countries';

const CountrySelector = (toggleCheckbox, countryPicker) => {  
	const countryCodes = Object.keys(countryObject);
    
	const countrySelector = countryCodes.map(countryCode => {
		return (
			<div key={countryCode}>
				<label>
					<input 
						type='checkbox'
						id={countryCode}
						name={countryObject[countryCode]}
						checked={countryPicker[countryCode]}
						value={countryPicker[countryObject[countryCode]]}
						onChange={event => {
							toggleCheckbox(event.target.name);
						}}
					/>
					{countryObject[countryCode]}
				</label>
			</div>
		);
	});
    
	return (
		<div className='country-selector-component'>
			{countrySelector}
		</div>
	);
};

export default CountrySelector;

