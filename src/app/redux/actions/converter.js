export const UPDATE_FIELD = 'UPDATE_FIELD';
export const START_CONVERTER = 'START_CONVERTER';

export const calculate = (data) => ({
	type: UPDATE_FIELD,
	payload: data
})

export const converter = (data) => ({
	type: START_CONVERTER,
	payload: data
})

export const startConverted = (data) => {
	return (dispatch, getState) => {
		dispatch(converter({
			rates: getState().exchangeRates.exchangeRates,
			data: data
		}))
	}
}

export const updateField = (data) => {
	return (dispatch, getState) => {
		dispatch(calculate({
			rates: getState().exchangeRates.exchangeRates,
			field: data
		}))
	}
}
