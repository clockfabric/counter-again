import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";

function App() {
	const [numberOfCounters, setNumberOfCounters] = useState(0);

	const updateNumberOfCounters = count => {
		setNumberOfCounters(count);
	};

	return (
		<div className='App'>
			<h1 className='m-5'>Number of counters: {numberOfCounters}</h1>
			<Counters updateNumberOfCounters={updateNumberOfCounters} />
		</div>
	);
}

export default App;
