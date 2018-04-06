import updatePreferences from '../../src/reducers/updatePreferences';

describe('updatePreferences reducer', () => {

	it('should return the initial state', () => {
		expect(updatePreferences(undefined, {type: 'REMOVE_BUGS'})).toEqual({
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
			 	'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		});
	});

	it('should handle change in checkbox value', () => {
		const preState = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
			 	'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		};

		const incomingAction = {
			type: 'CHANGE_CHECKBOX_VALUE',
			category: 'science'
		};

		const desiredOutput = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
			 	'health' : false,
				'science': true,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		};

		expect(updatePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
				'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		});
	});

	it('should handle changing textbox value', () => {
		const preState = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
			 	'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		};

		const incomingAction = {
			type: 'UPDATE_TEXTBOX_VALUE',
			name: 'Interests',
			input: 'Redux'
		};

		const desiredOutput = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
				'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : 'Redux',
				'Ignore' : ''
			}
		};

		expect(updatePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
				'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		});

	});

	it('should handle restoring customised settings', () => {
		const preState = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
			 	'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		};

		const incomingAction = {
			type: 'RESTORE_CUSTOMISED_SETTINGS',
			savedInLocalStorage : {
				preferencesObject : {
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
			}
		};

		const desiredOutput = {
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
		};

		expect(updatePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
				'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		});

	});

	it('should handle clearing update preferences state', () => {
		const preState = {
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
		};

		const incomingAction = {
			type: 'CLEAR_UPDATE_PREFERENCES'
		};

		const desiredOutput = {
			categoryPicker: {
				'general': false,
				'business' : false,
				'entertainment': false,
				'health' : false,
				'science': false,
				'sports': false,
				'technology': false
			},
			textBox: {
				'Interests' : '',
				'Ignore' : ''
			}
		};

		expect(updatePreferences(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
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
		});

	});
});
