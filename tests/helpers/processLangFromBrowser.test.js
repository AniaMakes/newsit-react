const { processLangFromBrowser } = require('../../BE/helpers/processLangFromBrowser');

describe('processLangFromBrowser', () => {
	it('returns a language ISO code if the regional language is an accepted parameter in the API', () => {
		const langFromBrowser = 'en-GB,en-US;q=0.9,en;q=0.8';
		const expectedOutcome = 'gb';

		expect(processLangFromBrowser(langFromBrowser)).toEqual(expectedOutcome);
	});

	it('returns a language ISO code if the primary language is an accepted parameter in the API but regional language is not', () => {
		const langFromBrowser = 'gb-CY'; // Welsh, in GB
		const expectedOutcome = 'gb';

		expect(processLangFromBrowser(langFromBrowser)).toEqual(expectedOutcome);
	});

	it('reverts to GB if the language is NOT an accepted parameter in the API', () => {
		const langFromBrowser = 'zh-Hans'; // Simplified Chinese
		const expectedOutcome = 'gb';
		expect(processLangFromBrowser(langFromBrowser)).toEqual(expectedOutcome);
	});

	it('accepts languages without regionals', () => {
		const langFromBrowser = 'pl'; // Polish
		const expectedOutcome = 'pl';
		expect(processLangFromBrowser(langFromBrowser)).toEqual(expectedOutcome);
	});
});
