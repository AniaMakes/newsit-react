import React from 'react';
import PropTypes from 'prop-types';
import { countryObject, countryNameObject } from '../constants/countries';
import '../../styles/CountrySelector.scss';

const CountrySelector = ({countryNewsRequest, props}) => {  
	const countryNames = Object.keys(countryNameObject);

	const countrySelector = countryNames.map(countryName => {
		return (
			<div key={countryNameObject[countryName]} className='country-container'>
				<h4
					className='country-name'
					id={countryNameObject[countryName]}
					name='countryName'
					onClick={event=> {
						return countryNewsRequest(event.target.id);
					}}	
				>
					{countryName}
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

