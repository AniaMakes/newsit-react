import React from 'react';
import CountrySelector from './CountrySelector';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';
import CountryNewsContainer from '../containers/CountryNewsContainer';

const WorldNews = (props) => {
	return (
		<div className='world-news-component'>
			<h2>World News</h2>
			<CountryNewsContainer />
			<CountrySelectorContainer />
		</div>
	);
};

export default WorldNews;