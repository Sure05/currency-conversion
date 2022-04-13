import {combineReducers} from "@reduxjs/toolkit";
import exchangeRates from "./reducers/exchangeRatesReducer";
import converter from "./reducers/converterReducer";

export const reducer = combineReducers({
	exchangeRates,
	converter
})
