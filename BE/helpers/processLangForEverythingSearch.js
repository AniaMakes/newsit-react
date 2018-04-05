const processLangForEverythingSearch = (acceptLangFromBrowser) => {
	const lang = acceptLangFromBrowser.split(',')[0].split('-');
	const primaryTag = lang[0];

	const acceptedLangs = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];

	let queryLang;

	if (acceptedLangs.includes(primaryTag.toLowerCase())) {
		queryLang = primaryTag;
	} else {
		queryLang = 'en';
	}

	return queryLang.toLowerCase();
};

module.exports = {
	processLangForEverythingSearch,
};