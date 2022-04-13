import React from 'react';
import CurrencyWidget from "./currencyWidget";

const currenciesList = ["USD", "EUR"]

function HeaderPage(props) {
	return (
		<div className={"header"}>
			<div className="container">
				<h1>Mono: Currency Converter </h1>
				<div>
					{currenciesList.map((el, index) => <CurrencyWidget key={index} code={el} /> )}
				</div>
			</div>
		</div>
	);
}

export default HeaderPage;
