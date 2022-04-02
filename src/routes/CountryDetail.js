import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

function CountryDetail({ weatherData, setWeatherData, enteredCountry, setCountryData, countryData }) {
	const [isLoading, setIsLoading] = useState(true);
	const [countryCapital, setCountryCapital] = useState("");
	const [countryFlag, setCountryFlag] = useState("");
	const [countryLat, setCountryLat] = useState([]);
	const [countryPopulation, setCountryPopulation] = useState("");

	// url
	const apiCountryUrl = `https://restcountries.com/v3.1/name/${enteredCountry}`;
	const apiCityUrl = `http://api.weatherstack.com/current?access_key=b750cd292034cb7634c1ac4df820105b&query=${enteredCountry}`;

	// Calling Api Handler to get Weather
	async function apiCityHandler() {
		try {
			const response = await axios.get(apiCityUrl);
			setWeatherData(response.data.current);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	// Calling Api Handler to get Country Information
	async function apiCountryHandler() {
		try {
			const response = await axios.get(apiCountryUrl);
			setCountryData(response.data["0"]);
			setCountryFlag(response.data["0"].flags.png);
			setCountryLat(response.data["0"].latlng);
			setCountryCapital(response.data["0"].capital["0"]);
			setCountryPopulation(response.data["0"].population);
			console.log(response.data["0"]);
		} catch (error) {
			alert("Error While Getting Data");
			console.error(error);
		}
	}

	useEffect(() => {
		apiCityHandler();
		apiCountryHandler();
		const delayTimer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return () => {
			clearTimeout(delayTimer);
		};
	}, []);

	var data = [
		{
			name: "Country Capital",
			countryValue: <span>{countryCapital}</span>,
		},
		{
			name: "Country Population",
			countryValue: <span>{countryPopulation}</span>,
		},
		{
			name: "Country Lat",
			countryValue: <span>{countryLat + ","}</span>,
		},
		{
			name: "Country Flag",
			countryValue: <img src={countryFlag} alt='Country Flag' />,
		},
	];

	return (
		<div>
			{countryData === undefined ? (
				<div>Error While Retrieving Data</div>
			) : (
				<div>
					<h1>Entered Country: {enteredCountry}</h1>

					{data.map((item, id) => (
						<div key={id}>
							<h2>
								{item.name}: {item.countryValue}
							</h2>
						</div>
					))}

					<Link to='/detail'>
						<button>Weather Information</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default CountryDetail;
