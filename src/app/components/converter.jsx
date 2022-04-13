import React, {useEffect} from 'react';
import Input from "./fields/input";
import Select from "./fields/select";
import {useDispatch} from "react-redux";
import {startConverted} from "../redux/actions/converter";

const initial = {
	countryOne: "840",
	countryTwo: "980",
	fieldOne: 1,
}


function Converter(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startConverted(initial))
	}, [dispatch])
	return (
		<div className={"container"} style={{paddingTop: 25}}>
			<div>
				<div className={"rowContainer"}>
					<div className="title">
						From
					</div>
					<Input name={"fieldOne"}/>
					<Select name={"countryOne"}/>
				</div>
				<div style={{display: "flex", justifyContent: "start"}}>
					<div className="title">To</div>
					<Input name={"fieldTwo"}/>
					<Select name={"countryTwo"}/>
				</div>
			</div>
		</div>
	);
}

export default Converter;
