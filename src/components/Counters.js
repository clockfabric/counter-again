import React, { useState } from "react";
import Counter from "./Counter";
import uuidv4 from "uuid/v4";

const Counters = props => {
	const [counters, setCounters] = useState([]);

	const addCounter = () => {
		setCounters([...counters, { id: uuidv4(), count: 0 }]);
		props.updateNumberOfCounters(counters.length + 1);
	};

	const handleIncrement = id => {
		const newCounters = [...counters];
		newCounters.forEach(counter => {
			if (counter.id === id) {
				counter.count += 1;
			}
		});
		setCounters(newCounters);
	};

	const handleDecrement = id => {
		const newCounters = [...counters];
		newCounters.forEach(counter => {
			if (counter.id === id && counter.count !== 0) {
				counter.count -= 1;
			}
		});
		setCounters(newCounters);
	};

	const handleRemoveCounter = id => {
		const newCounters = [...counters];
		const idx = newCounters.findIndex(counter => counter.id === id);
		newCounters.splice(idx, 1);
		setCounters(newCounters);
		props.updateNumberOfCounters(counters.length - 1);
	};

	return (
		<React.Fragment>
			<button
				onClick={addCounter}
				className='btn btn-primary btn-block mb-5'>
				Add Counter
			</button>
			{counters.map(counter => (
				<div key={counter.id} className='m-2'>
					<Counter
						id={counter.id}
						countValue={counter.count}
						handleIncrement={handleIncrement}
						handleDecrement={handleDecrement}
						removeCounter={handleRemoveCounter}
					/>
					<br />
				</div>
			))}
		</React.Fragment>
	);
};

export default Counters;
