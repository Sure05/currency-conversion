export const FETCH_EXCHANGE_RATES_PENDING = 'fetchExchangeRates/pending';
export const FETCH_EXCHANGE_RATES_FULFILLED = 'fetchExchangeRates/fulfilled';
export const FETCH_EXCHANGE_RATES_REJECTED = 'fetchExchangeRates/rejected';

export const fetchExchangeRatesPending = () => ({
	type: FETCH_EXCHANGE_RATES_PENDING,
})

export const fetchExchangeRatesFulfilled = (data) => ({
	type: FETCH_EXCHANGE_RATES_FULFILLED,
	payload: data
})
export const fetchExchangeRatesRejected = (error) => ({
	type: FETCH_EXCHANGE_RATES_REJECTED,
	payload: error
})

export function fetchExchangeRates() {
	return async (dispatch, getState) => {
		dispatch(fetchExchangeRatesPending())
		const timeSinceLastFetch = getState().exchangeRates.lastFetched
		const isDataStale = (Date.now() - timeSinceLastFetch) > (5 * 60 * 1000);
		if (isDataStale) {
			return fetch('https://api.monobank.ua/bank/currency').then(async data => {
				dispatch(fetchExchangeRatesFulfilled({
					data: await data.json(),
					update: true
				}))
			}).catch(err => {
				dispatch(fetchExchangeRatesRejected(err))
			});
		} else {
			return dispatch(fetchExchangeRatesFulfilled({
				data: getState().exchangeRates.exchangeRates,
				update: false
			}))
		}
	}
}
