import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchExchangeRates} from "./app/redux/actions/exchangeRates";
import HeaderPage from "./app/components/header";
import Converter from "./app/components/converter";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchExchangeRates())
	}, [dispatch])
	return (
		<>
			<HeaderPage />
			<Converter />
		</>
	);
}

export default App;
