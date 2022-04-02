import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ setEnteredCountry, enteredCountry }) {
	const [isDisabled, setIsDisabled] = useState(true);

	// check if City Input in empty
	const checkTextValidity = (value) => {
		if (value.length === 0) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	};

	// Setting  City Name to State from the input
	const inputHandler = (event) => {
		event.preventDefault();
		setEnteredCountry(event.target.value);
	};

	useEffect(() => {
		checkTextValidity(enteredCountry);
	}, [enteredCountry]);

	return (
		<div>
			<div>
				<form>
					<input placeholder='Country Name' type='text' onChange={inputHandler} />
					<Link to={"/country-detail"}>
						<button type='submit' disabled={isDisabled}>
							Submit
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}
