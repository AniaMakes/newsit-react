import searchComponentFunctionality from '../../src/reducers/searchComponentFunctionality';

describe('searchComponentFunctionality', () => {
	it('should return the initial state', () => {
		expect(searchComponentFunctionality(undefined, {type: 'REMOVE_BUGS'})).toEqual({searchResults: {}, searchQueryInput: '', mostRecentSearch: ''});
	});

	it('should handle submit search', () => {
		const preState = {
			searchResults: {},
			searchQueryInput: 'kittens',
			mostRecentSearch: ''
		};
		const action = {
			type: 'RECEIVE_SEARCH',
			query: 'kittens',
			results: ['alpha', 'bravo']
		};

		const desiredOutput = {
			searchResults: {
				kittens: ['alpha', 'bravo']
			},
			searchQueryInput: '',
			mostRecentSearch: 'kittens'
		};

		expect(searchComponentFunctionality(preState, action)).toEqual(desiredOutput);
	});

	it('should handle update query input '),
	() => {
		const preState = {
			searchResults: {},
			query: '',
			mostRecentSearch: ''
		};

		const incomingAction = {
			type: 'UPDATE_QUERY',
			query: 'kittens'
		};

		const desiredOutput = {
			searchResults: {},
			query: 'kittens',
			mostRecentSearch: ''
		};

		expect(searchComponentFunctionality(preState, incomingAction)).toEqual(desiredOutput);
	};
});
