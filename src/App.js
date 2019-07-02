import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";

function App() {
	const [numberOfCounters, setNumberOfCounters] = useState(0);

	const updateNumberOfCounters = count => {
		setNumberOfCounters(count);
	};

	const renderHeaderMessage = () => {
		switch (numberOfCounters) {
			case 0:
				return "No counters!";
			case 1:
				return "Only one counter!";
			case 5:
				return "Five counters, Yayyyyy!";
			default:
				return `Number of counters: ${numberOfCounters}`;
		}
	};

	return (
		<div className='App'>
			<h1 className='m-5'>{renderHeaderMessage()}</h1>
			<Counters updateNumberOfCounters={updateNumberOfCounters} />
		</div>
	);
}

export default App;
