import React from "react";

const Counter = props => {
	const {
		id,
		countValue: count,
		handleIncrement,
		handleDecrement,
		removeCounter
	} = props;

	const formatCount = () => {
		return count === 0 ? "Zero" : count;
	};

	const renderBadgeStyle = () => {
		let classes = "badge m-2 ";
		return (classes += count === 0 ? "badge-warning" : "badge-primary");
	};

	const styles = {
		fontSize: 14,
		fontWeight: "bold"
	};

	return (
		<React.Fragment>
			<button
				className='btn btn-primary'
				onClick={() => handleDecrement(id)}>
				Decrement
			</button>
			<span style={styles} className={renderBadgeStyle()}>
				{formatCount()}
			</span>
			<button
				className='btn btn-primary'
				onClick={() => handleIncrement(id)}>
				Increment
			</button>
			<button
				className='btn btn-outline-danger ml-4'
				onClick={() => removeCounter(id)}>
				Remove Counter
			</button>
		</React.Fragment>
	);
};

export default Counter;
