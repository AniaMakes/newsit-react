import React from 'react';
import CountrySelector from './CountrySelector';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';
import CountryNewsContainer from '../containers/CountryNewsContainer';
import '../../styles/WorldNews.scss';

const WorldNews = props => {
	return (
		<section className="stick-footer">
			<div className="world-header">
				<h2 className="world-page-title">World News</h2>
			</div>
			<CountrySelectorContainer />
			<CountryNewsContainer />
		</section>
	);
};

export default WorldNews;
