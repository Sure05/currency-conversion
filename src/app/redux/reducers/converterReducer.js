import {START_CONVERTER, UPDATE_FIELD} from "../actions/converter";
import {directConversion, reverseConversion} from "../../assets/calculate";

const initialState = {
	fieldOne: 0,
	countryOne: '',
	fieldTwo: 0,
	countryTwo: '',
}

function converter(state = initialState, action) {
	switch (action.type) {
		case UPDATE_FIELD:
			const rates = action.payload.rates;
			const {name, value} = action.payload.field;
			switch (name){
				case 'fieldTwo':
				case 'countryTwo':
					return reverseConversion({
						...state,
						[name]: value
					}, rates);
				
				case 'fieldOne':
				case 'countryOne':
					return directConversion({
						...state,
						[name]: value
					}, rates);
				default:
			}
			break;
		case START_CONVERTER:
			return directConversion({
				...state,
				...action.payload.data,
			}, action.payload.rates);
		default:
			return state;
	}
}

export default converter
