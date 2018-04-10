import React from 'react';
import PropTypes from 'prop-types';
import { countryObject } from '../constants/countries';

const CountrySelector = ({toggleCountryCheckbox, countryPicker, countryNewsRequest, props}) => {  
	//NOTE: toggleCountryCheckbox and countryPicker are used only in checkbox solution
	//if string click solution is chosen, get rid of the checkbox specific functions
	console.log('CountrySelectorComponent - props: ', props);
	const countryCodes = Object.keys(countryObject);
    
	// const countrySelector = countryCodes.map(countryCode => {
	// 	return (
	// 		<div key={countryCode}>
	// 			<label>
	// 				<input 
	// 					type='checkbox'
	// 					id={countryCode}
	// 					name={countryObject[countryCode]}
	// 					checked={countryPicker[countryCode]}
	// 					value={countryPicker[countryObject[countryCode]]}
	// 					onChange={event => {
	// 						console.log(event.target.id);
	// 						toggleCountryCheckbox(event.target.id);
	// 					}}
	// 				/>
	// 				{countryObject[countryCode]}
	// 			</label>
	// 		</div>
	// 	);
	// });

	const countrySelector = countryCodes.map(countryCode => {
		return (
			<div key={countryCode}>
				<h4 
					className='country-name'
					id={countryCode}
					name={countryObject[countryCode]}
					onClick={event=> {
						return countryNewsRequest(event.target.id);
					}}
				>
					{countryObject[countryCode]}
				</h4>
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

