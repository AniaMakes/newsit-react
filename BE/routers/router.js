const router = require('express').Router();
const { processLangFromBrowser } = require('../helpers/processLangFromBrowser');
const { processLangForEverythingSearch } = require('../helpers/processLangForEverythingSearch');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);


// make get requests here. Account for 404 and 500 errors.
router.get('/topheadlines/:category', (req, res, next) => {
	const acceptLang = req.headers['accept-language'];
	const queryLang = processLangFromBrowser(req.headers['accept-language']);
	console.log('Router getCategories :',req.params.category);
	newsapi.v2.topHeadlines({
		category: req.params.category,
		country: queryLang,
		pageSize: 20,
	}).then((response) => {
		if (response.status === 'ok' && response.totalResults !== 0) {
			res.status(200).json(response);
		} else {
			res.status(404).json({error: 'something went wrong in topheadlines fetch'});
		}
	}).catch((err) => {
		console.log('I come from the router:headline fetch: ', err);
		next(err);
	});
});

router.get('/search/:query', (req,res, next) => {
	const acceptLang = req.headers['accept-language'];
	const queryLang = processLangForEverythingSearch(acceptLang);

	const query = req.params.query;
	newsapi.v2.everything({
		q: query,
		sortBy: 'popularity',
		language: queryLang,
	}).then((response) => {
		if(response.status === 'ok' && response.totalResults !== 0) {
			res.status(200).json(response);
		} else {
			res.status(404).json({error: 'something went wrong in search fetch'});
		}
	}).catch((err) => {
		console.log('I come from the router:search fetch: ', err);
		next(err);
	});
});

router.get('/countryNews/:country', (req, res, next) => {
	const country = req.params.country;
	newsapi.v2.topHeadlines({
		category: 'general',
		country: req.params.country
	}).then((response) => {
		if (response.status === 'ok' && response.totalResults !== 0) {
			res.status(200).json(response);
		} else {
			res.status(404).json({error: 'something went wrong in country fetch'});
		}
	}).catch((err) => {
		console.log('I come from the router:country fetch: ', err);
		next(err);
	});
});


router.use((req, res) => {
	res.status(404).send(':( NOPES. Nothing to see here');
});

router.use((err, req, res) => {
	res.status(500).send(err);
});

module.exports=router;
