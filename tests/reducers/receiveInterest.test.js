import receiveInterest from '../../src/reducers/receiveInterest';

describe('receiveInterest receiver', () => {
	it('should return the initial state', () => {
		expect(receiveInterest(undefined, {type: 'REMOVE_BUGS'})).toEqual({});
	});

	it('should handle RECEIVE_INTEREST', () => {
		const preState = {};

		const incomingAction = {
			type: 'RECEIVE_INTEREST',
			results: ['tesla', 'ford', 'fiat'],
			interest: 'cars'
		};

		const desiredOutput = {
			cars: ['tesla', 'ford', 'fiat']
		};

		expect(receiveInterest(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({});
	});

	it('should handle CLEAR_INTERESTS', () => {
		const preState = {
			cars: ['tesla', 'ford', 'fiat']
		};

		const incomingAction = {
			type: 'CLEAR_INTERESTS'
		};

		const desiredOutput = {};

		expect(receiveInterest(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			cars: ['tesla', 'ford', 'fiat']
		});
	});
});
