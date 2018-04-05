import savePreferences from '../../src/reducers/savePreferences';

describe('savePreferences reducer', () => {
	it('should return the initial state', () => {
		expect(savePreferences(undefined, {type: 'REMOVE_BUGS'})).toEqual({});
	});

	it('should handle saving preferences', () => {
		const preState = {};

		const incomingAction = {
			type: 'SAVE_PREFERENCES',
			preferences: {
				categoryPicker: {
					'general': false,
					'business' : true,
					'entertainment': false,
					'health' : false,
					'science': true,
					'sports': false,
					'technology': false
				},
				textBox: {
					'Interests' : 'tesla, apple, bill gates',
					'Ignore' : ''
				}
			}
		};

		const desiredOutput = {
			preferences: {	categoryPicker: {
				'general': false,
				'business' : true,
				'entertainment': false,
				'health' : false,
				'science': true,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : 'tesla, apple, bill gates',
				'Ignore' : ''
			}}
		};

		expect(savePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({});
	});

	it('handles saving preferences when they come from local storage', () => {
		const preState = {};

		const incomingAction = {
			type: 'SAVE_PREFERENCES_FROM_LOCAL_STORAGE',
			savedInLocalStorage: {	categoryPicker: {
				'general': false,
				'business' : true,
				'entertainment': false,
				'health' : false,
				'science': true,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : 'tesla, apple, bill gates',
				'Ignore' : ''
			}}
		};

		const desiredOutput = {
			preferences: {	categoryPicker: {
				'general': false,
				'business' : true,
				'entertainment': false,
				'health' : false,
				'science': true,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : 'tesla, apple, bill gates',
				'Ignore' : ''
			}}
		};

		expect(savePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({});


	});



});
