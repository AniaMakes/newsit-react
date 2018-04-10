import React from 'react';
import CountrySelector from './CountrySelector';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';
import CountryNewsContainer from '../containers/CountryNewsContainer';

const WorldNews = (props) => {
	return (
		<div className='world-news-component'>
            Here are all the countries:
			<CountrySelectorContainer />
			<CountryNewsContainer />
		</div>
	);
};

export default WorldNews;