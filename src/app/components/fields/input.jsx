import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateField} from "../../redux/actions/converter";

function Input({name}) {
	const value = useSelector(state => state.converter[name]);
	const dispatch = useDispatch()
	const changeField = (e) => {
		dispatch(updateField({
			name,
			value: parseInt(e.target.value)
		}))
	}
	return (
		<div className={"inputStyle"}>
			<input value={value} onChange={changeField} type={"number"} />
		</div>
	);
}

export default Input;
