export const selectCurrencyByCodeList = (state, code) => {
	let currency =  state.exchangeRates.currencies.find(el => el.code.toLowerCase() === code.toLowerCase())
	let rate =  state.exchangeRates.exchangeRates.find(el => el.currencyCodeA === parseInt(currency.number) && el.currencyCodeB === 980);
	if(currency && rate){
		return {
			code: currency.code,
			name: currency.name,
			rateBuy: rate.rateBuy,
			rateSell: rate.rateSell,
			rateCross: rate.rateCross,
		}
	}
}
