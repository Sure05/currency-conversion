import {combineReducers} from "@reduxjs/toolkit";
import converter from "./converterReducer";
import exchangeRates from "./exchangeRatesReducer";

export default combineReducers({
	converter,
	exchangeRates: exchangeRates
})
