import React from 'react';
import PropTypes from 'prop-types';
import { countryObject } from '../constants/countries';

const CountrySelector = ({countryNewsRequest, props}) => {  
	const countryCodes = Object.keys(countryObject);

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

CountrySelector.propTypes = {
	countryNewsRequest: PropTypes.func,
	props: PropTypes.object
};

export default CountrySelector;

