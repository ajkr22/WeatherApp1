import React from "react";

export default function Details({ weatherData, apiCity }) {
	return (
		<div>
			{weatherData === undefined ? (
				<div>Error While Retrieving Data</div>
			) : (
				<div>
					<div>
						<h1>{apiCity} Temperature Data:</h1>
						<h2>
							Weather Icons: <img src={weatherData.weather_icons[0]} alt='weather Icon' />
						</h2>
						<h2>Temperature: {weatherData.temperature}</h2>
						<h2>Wind Speed: {weatherData.wind_speed}</h2>
					</div>
				</div>
			)}
		</div>
	);
}
