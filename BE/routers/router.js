const router = require('express').Router();
const { processLangFromBrowser } = require('../helpers/processLangFromBrowser');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);


// make get requests here. Account for 404 and 500 errors.
router.get('/topheadlines/:category', (req, res, next) => {
  const acceptLang = req.headers['accept-language'];
  const queryLang = processLangFromBrowser(acceptLang);

  newsapi.v2.topHeadlines({
    category: req.params.category,
    country: queryLang,
    pageSize: 5,
  }).then((response) => {
    // console.log(response);
    res.status(200).json(response);
  }).catch((err) => {
    next(err);
  });
});

router.get('/search/:query', (req,res, next) => {
  const query = req.params.query;
  newsapi.v2.everything({
    q: query,
    sortBy: 'popularity'
  }).then((response) => {
    // console.log(response);
    res.status(200).json(response);
  }).catch((err) => {
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
