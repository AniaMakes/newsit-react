import React from 'react';
import PropTypes from 'prop-types';
import { countryObject } from '../constants/countries';
import Story from './Story';
import ErrorContainer from '../containers/ErrorContainer';

const CountryNews = (props) => {
	const {country, countryCode} = props;	
	const countryName = countryObject[countryCode];
	if(Array.isArray(country)) {
		return (
			<section className={country ? 'stories-show' : 'hidden'}>
				<h3> {countryName} </h3>		
				{country.map((storyData, i) => {
					return <Story
						storyData={storyData}
						key={i}
					/>;
				})}
			</section>
		);
	} else {
		return <section className={country ? 'stories-show' : 'hidden'}>
			<ErrorContainer
				category='News From {countryName}'
				error='Sorry, no results for this search. Try searching for something else'
				buttonText='Refresh the page'
				route='/default'
			/>
		</section>;
	}
};

CountryNews.propTypes = {
	country: PropTypes.array,
	props: PropTypes.object
};

export default CountryNews;
