import searchComponentFunctionality from '../../src/reducers/searchComponentFunctionality';

describe('searchComponentFunctionality reducer', () => {
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
		expect(preState).toEqual({
			searchResults: {},
			searchQueryInput: 'kittens',
			mostRecentSearch: ''
		});
	});

	it('should handle update query input ',
		() => {
			const preState = {
				searchResults: {},
				searchQueryInput: '',
				mostRecentSearch: ''
			};

			const incomingAction = {
				type: 'UPDATE_QUERY',
				query: 'kittens'
			};

			const desiredOutput = {
				searchResults: {},
				searchQueryInput: 'kittens',
				mostRecentSearch: ''
			};

			expect(searchComponentFunctionality(preState, incomingAction)).toEqual(desiredOutput);
			expect(preState).toEqual({
				searchResults: {},
				searchQueryInput: '',
				mostRecentSearch: ''
			});
		});

	it('should handle receiving an error', () => {
		const preState = {
			searchResults: {},
			searchQueryInput: '',
			mostRecentSearch: ''
		};

		const incomingAction = {
			type: 'RECEIVE_SEARCH_ERROR',
			errorText: 'this is an error',
			query: 'bunny'
		};

		const desiredOutput = {
			searchResults: {
				'bunny': 'this is an error'
			},
			searchQueryInput: '',
			mostRecentSearch: 'bunny'
		};

		expect(searchComponentFunctionality(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			searchResults: {},
			searchQueryInput: '',
			mostRecentSearch: ''
		});
	});
});
