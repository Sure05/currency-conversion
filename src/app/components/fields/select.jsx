import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import currencies from "../../assets/currencies.json";
import {updateField} from "../../redux/actions/converter";


function Select({name}) {
	const dispatch = useDispatch()
	const value = useSelector(state => state.converter[name]);
	const anotherCountryValue = useSelector(state => {
		if (name === 'countryOne') return state.converter.countryTwo
		if (name === 'countryTwo') return state.converter.countryOne
	});

	const changeField = (e) => {
		dispatch(updateField({
			name,
			value: e.target.value
		}))
	}
	
	
	return (
		<div className={"inputStyle"}>
			<select value={value} onChange={changeField} name="" id="">
				<option value=""/>
				{currencies.map(el => anotherCountryValue !== el.number && <option key={el.number} value={el.number}>{el.code}: {el.name}</option>
				)}
			</select>
		</div>
	);
}

export default Select;
