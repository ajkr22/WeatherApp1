import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import Home from "./routes/Home";
import Detail from "./routes/Details";
import CountryDetail from "./routes/CountryDetail";

function App() {
	const [enteredCity, setEnteredCity] = useState("");
	const [enteredCountry, setEnteredCountry] = useState("");
	const [apiCity, setApiCity] = useState("");
	const [countryData, setCountryData] = useState([]);
	const [weatherData, setWeatherData] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home enteredCountry={enteredCountry} setEnteredCountry={setEnteredCountry} />}
				/>
				<Route
					path='detail'
					element={<Detail weatherData={weatherData} apiCity={apiCity} countryData={countryData} />}
				/>
				<Route
					path='/country-detail'
					element={
						<CountryDetail
							countryData={countryData}
							setCountryData={setCountryData}
							enteredCountry={enteredCountry}
							weatherData={weatherData}
							setWeatherData={setWeatherData}
						/>
					}
				/>
				<Route path='*' element={<div>Error Page</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
