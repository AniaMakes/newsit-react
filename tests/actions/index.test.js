import * as actions from '../../src/actions';

describe('receiveNews', () => {
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

describe('updateQuery', () => {
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


// describe('receiveSearch', () => {
//   it('should output receiveSearch object ready for receiver', () => {
//     const articles = ['alpha', 'bravo'];
//     const query = 'alphabet';
//     const expectedOutcome =
//   })
// })
