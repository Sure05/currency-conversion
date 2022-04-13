import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {selectCurrencyByCodeList} from "../redux/selector";

function CurrencyWidget({code}) {
	const measure = useSelector(state => selectCurrencyByCodeList(
		state, code
	), shallowEqual);
	if(!measure) return <></>
	return (
		<div className={"currentRate"}>
			{measure.code}: {measure.rateCross ? <span>{measure.rateCross}</span> : (
			<><span>{measure.rateBuy}</span> / <span>{measure.rateSell}</span></>
		)}
		</div>
	);
}

export default CurrencyWidget;
