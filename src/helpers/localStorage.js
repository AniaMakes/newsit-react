export const loadState = (storageKey) => {
	try {
		const serialisedState = localStorage.getItem(storageKey);
		if (serialisedState === null){
			return undefined;
		}
		return JSON.parse(serialisedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (storageKey, stateToBeSaved) => {
	try {
		const serialisedState = JSON.stringify(stateToBeSaved);
		localStorage.setItem(storageKey, serialisedState);
	} catch (err) {
		// Ignore write errors
	};
};
