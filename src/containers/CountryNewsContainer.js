import { connect } from 'react-redux';
import CountryNews from '../components/CountryNews';

const getCountryNews = state => {
	const {receiveCountryNews} = state;
	const {country, countryNews} = receiveCountryNews;
	return countryNews[country];
};

const getCountryCode = state => {
	const {receiveCountryNews} = state;
	const {country} = receiveCountryNews;
	return country;
};

const mapStateToProps = (state, ownProps) => ({
	country : getCountryNews(state),
	countryCode : getCountryCode(state),
	ownProps
});


export default connect(
	mapStateToProps
)(CountryNews);
