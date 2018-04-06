import * as actions from '../../src/actions';
import fetchMock from 'fetch-mock';

// ============ DEFAULT CATEGORIES BLOCK

describe('receiveNews action', () => {
	it('should output receiveNews object ready for receiver', () => {
		const news = ['alpha', 'bravo'];
		const category = 'worldwide';
		const expectedOutcome = {
			type: 'RECEIVE_NEWS',
			news: ['alpha', 'bravo'],
			category: 'worldwide'
		};

		const attempt = actions.receiveNews(news, category);

		expect(attempt).toEqual(expectedOutcome);
	});
});

describe('receiveError action', () => {
	it('should output receiveError object ready for receiver', () => {
		const error = 'Error. Sad times';
		const category = 'health';
		const attempt = actions.receiveError(error, category);
		const desiredOutput = {
			type: 'RECEIVE_ERROR',
			errorText: 'Error. Sad times',
			category: 'health'
		};

		expect(attempt).toEqual(desiredOutput);
	});
});

// TODO: fetchNews, requestNews

describe('fetchNews action, receiving news works', () => {

	beforeEach(() => {
		fetchMock.get('*', {
			articles: ['alpha', 'bravo']
		});
	});

	it('fetchNews ...', (done) => {
		const attempt = actions.fetchNews('testing');
		const dispatch = jest.fn();

		attempt(dispatch);

		setTimeout( () => {
			expect(dispatch.mock.calls).toEqual([[
				{
					type: 'RECEIVE_NEWS',
					news: ['alpha', 'bravo'],
					category:'testing'
				}
			]]);
			done();
		}, 0);

	});

	afterEach(() => {
		fetchMock.restore();
	});
});

describe('fetchNews action, receiving news fails', () => {
	beforeEach(() => {
		fetchMock.get('*', {
			errorText : 'Error. Sad times'
		});
	});

	it('fetcheNews ...', (done) => {
		const attempt = actions.fetchNews('testing');
		const dispatch = jest.fn();

		attempt(dispatch);

		setTimeout( () => {
			expect(dispatch.mock.calls).toEqual([[
				{
					type:'RECEIVE_ERROR',
					errorText: 'No news to display. Try again later',
					category: 'testing'
				}
			]]);
			done();
		},0);

		afterEach(() => {
			fetchMock.restore();
		});
	});

});
// ============= SEARCH BLOCK


describe('updateQuery action', () => {
	it('should output updateQuery object ready for receiver', () => {
		const query = 'kittens';
		const attempt = actions.updateQuery(query);
		const expectedOutcome = {
			type: 'UPDATE_QUERY',
			query: 'kittens'
		};

		expect(attempt).toEqual(expectedOutcome);
	});
});

describe('receiveSearch action', () => {
	it('should output receiveSearch object ready for receiver', () => {
		const articles = ['alpha', 'bravo'];
		const query = 'alphabet';
		const expectedOutcome = {
			type: 'RECEIVE_SEARCH',
			results: ['alpha', 'bravo'],
			query: 'alphabet'
		};

	 const attempt = actions.receiveSearch(articles, query);

	 expect(attempt).toEqual(expectedOutcome);
	});
});

describe('receiveSearchError action', () => {
	const error = 'Error. Sad times';
	const query = 'Gibberish';
	const attempt = actions.receiveSearchError(error, query);
	const expectedOutput = {
		type:'RECEIVE_SEARCH_ERROR',
		errorText: 'Error. Sad times',
		query: 'Gibberish'
	};

	expect(attempt).toEqual(expectedOutput);
});

//TODO: fetchSearch, searchRequest

// ============= PREFERENCES BLOCK

describe('updateCheckboxValue action ', () => {
	it('should output updateCheckboxValue object ready for receiver', () => {
		const category = 'sports';
		const attempt = actions.updateCheckboxValue(category);
		const expectedOutput = {
			type: 'CHANGE_CHECKBOX_VALUE',
			category: 'sports'
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

describe('updateTextboxValue action', () => {
	it('should output updateTextboxValue object ready for receiver', () => {
		const textBoxName = 'Interests';
		const textBoxInput = 'kittens';
		const attempt = actions.updateTextboxValue(textBoxName, textBoxInput);
		const expectedOutput = {
			type: 'UPDATE_TEXTBOX_VALUE',
			name: 'Interests',
			input: 'kittens'
		};

		expect(attempt).toEqual(expectedOutput);

	});
});

// TODO needs to work with local storage mock file

// describe('savePreferencesToLocalStorage', () => {
// 	const preferencesObject = {
// 		love : ['puppies', 'kittens']
// 	};
// 	const attempt = actions.savePreferencesToLocalStorage(preferencesObject);
// 	const expectedOutput = {
// 		type: 'SAVE_PREFERENCES',
// 		preferences: {
// 			love : ['puppies', 'kittens']
// 		}
// 	};
//
// 	expect(attempt).toEqual(expectedOutput);
// });

describe('savePreferencesToStateOnReload action', () => {
	it('should output savePreferencesToStateOnReload object ready for receiver', () => {
		const savedInLocalStorage = {preferences: 'my preferences'};
		const attempt = actions.savePreferencesToStateOnReload(savedInLocalStorage);
		const expectedOutput = {
			type: 'SAVE_PREFERENCES_FROM_LOCAL_STORAGE',
			savedInLocalStorage: {preferences: 'my preferences'}
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

describe('restoreCustomisedSettings action', () => {
	it('should output restoreCustomisedSettings object ready for receiver', () => {
		const savedInLocalStorage = {preferences: 'my preferences'};
		const attempt = actions.restoreCustomisedSettings(savedInLocalStorage);
		const expectedOutput = {
			type: 'RESTORE_CUSTOMISED_SETTINGS',
			savedInLocalStorage : {preferences: 'my preferences'}
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

describe('clearUpdatePreferences action', () => {
	it('should output clearUpdatePreferences object ready for receiver', () => {
		const attempt = actions.clearUpdatePreferences();
		const expectedOutput = {
			type: 'CLEAR_UPDATE_PREFERENCES'
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

describe('clearSavePreferences action', () => {
	it('should output clearSavePreferences object ready for reciever', () => {
		const attempt = actions.clearSavePreferences();
		const expectedOutput = {
			type: 'CLEAR_SAVE_PREFERENCES'
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

// ================ SEARCH INTEREST

describe('getInterest action', () => {
	it('should output getInterest object ready for receiver', () => {
		const articles = ['article1', 'article2', 'article3'];
		const query = 'my interest';
		const attempt = actions.getInterest(articles, query);
		const expectedOutput = {
			type: 'RECEIVE_INTEREST',
			results:['article1', 'article2', 'article3'],
			interest: 'my interest'
		};

		expect(attempt).toEqual(expectedOutput);
	});
});

//TODO fetchInterest, searchInterest

describe('clearInterests action', () => {
	it('should output clearInterests object ready for receiver', () => {
		const attempt = actions.clearInterests();
		const expectedOutput = {
			type: 'CLEAR_INTERESTS'
		};

		expect(attempt).toEqual(expectedOutput);
	});
});
