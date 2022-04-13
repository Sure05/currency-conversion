import {
	FETCH_EXCHANGE_RATES_FULFILLED,
	FETCH_EXCHANGE_RATES_PENDING,
	FETCH_EXCHANGE_RATES_REJECTED
} from "../actions/exchangeRates";

const currencies = require('../../assets/currencies.json');

const rates = JSON.parse(localStorage.getItem('rates'))

const initialState = {
	exchangeRates: rates ? rates.list : [],
	currencies,
	isFetching: false,
	lastFetched: rates ? rates.lastFetched : 0
};

function exchangeRates(state = initialState, action) {
	switch (action.type) {
		case FETCH_EXCHANGE_RATES_PENDING:
			return {
				...state,
				isFetching: true
			}
		case FETCH_EXCHANGE_RATES_FULFILLED:
			if (action.payload.update)
				localStorage.setItem('rates', JSON.stringify({
					lastFetched: Date.now(),
					list: action.payload.data
				}))
			return {
				...state,
				exchangeRates: action.payload.data,
				error: null,
				isFetching: false,
				lastFetched: action.payload.update ? Date.now() : state.lastFetched
			}
		case FETCH_EXCHANGE_RATES_REJECTED:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default exchangeRates
