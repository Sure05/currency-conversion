const PRECISION = 10000;

export function directConversion(state, rates) {
	const amount = state.fieldOne;
	const currencyFrom = state.countryOne;
	const currencyTo = state.countryTwo;
	
	if (currencyFrom === currencyTo){
		state.fieldTwo = amount;
		return;
	}
	
	const rateCurrencyFrom = getCurrencyByNumber(rates, state.countryOne) ?? {rateCross: 1};
	const rateCurrencyTo = getCurrencyByNumber(rates, state.countryTwo) ?? {rateCross: 1};
	
	let rateFrom = rateCurrencyFrom.rateCross ?? rateCurrencyFrom.rateBuy;
	let rateTo = rateCurrencyTo.rateCross ?? rateCurrencyTo.rateSell;
	
	if (currencyFrom !== '980'){
		const conversion = amount * rateFrom ;
		state.fieldTwo = (Math.round((conversion / rateTo) * PRECISION) / PRECISION).toFixed(2);
	} else if (currencyTo !== '980') {
		
		const conversion = amount / rateTo;
		state.fieldTwo = (Math.round((conversion / rateFrom) * PRECISION) / PRECISION).toFixed(2);
	}
	
	return state
}

export function reverseConversion (state, rates) {
	const amount = state.fieldTwo;
	const currencyFrom = state.countryTwo;
	const currencyTo = state.countryOne;
	
	if (currencyFrom === currencyTo){
		state.fieldOne = amount;
		return;
	}
	
	const rateCurrencyFrom = getCurrencyByNumber(rates, state.countryTwo) ?? {rateCross: 1};
	const rateCurrencyTo = getCurrencyByNumber(rates, state.countryOne) ?? {rateCross: 1};
	
	let rateFrom = rateCurrencyFrom.rateCross ?? rateCurrencyFrom.rateSell;
	let rateTo = rateCurrencyTo.rateCross ?? rateCurrencyTo.rateBuy;
	
	if (currencyFrom !== '980'){
		const conversion = amount / rateFrom ;
		state.fieldOne = (Math.round((conversion / rateTo) * PRECISION) / PRECISION).toFixed(2);
	} else if (currencyTo !== '980') {
		
		const conversion = amount * rateTo;
		state.fieldOne = (Math.round((conversion / rateFrom) * PRECISION) / PRECISION).toFixed(2);
	}
	
	return state
}

function getCurrencyByNumber(rate, rateId) {
	return rate.find(el => el.currencyCodeA === parseInt(rateId))
}
