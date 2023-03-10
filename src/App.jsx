import { useState } from 'react';
import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import Menu from './components/menu/Menu';
import Square from './components/square/Square';
import Title from './components/title/Title';

const App = () => {
	const [counterValue, setCounterValue] = useState(0);
	const [squareColor, setSquareColor] = useState('#48556A');

	return (
		<>
			<Menu />
			<div>
				<Title />
				<Counter counter={counterValue} />
				<Button
					handleClick={() => decrease(counterValue, setCounterValue)}
					buttonText='decrement'
				/>
				<Button
					handleClick={() => reset(counterValue, setCounterValue)}
					buttonText='reset'
				/>
				<Button
					handleClick={() => increase(counterValue, setCounterValue)}
					buttonText='increment'
				/>
			</div>
			<Square squareColor={squareColor} />
			<Button
				handleClick={() => setColor('red', setSquareColor)}
				buttonText='red'
			/>
			<Button
				handleClick={() => setColor('green', setSquareColor)}
				buttonText='green'
			/>
			<Button
				handleClick={() => setColor('blue', setSquareColor)}
				buttonText='blue'
			/>
		</>
	);
};
const decrease = (counterValue, setCounterValue) => {
	setCounterValue(counterValue - 1);
};

const increase = (counterValue, setCounterValue) => {
	setCounterValue(counterValue + 1);
};

const reset = (counterValue, setCounterValue) => {
	setCounterValue((counterValue = 0));
};

const setColor = (squareColor, setSquareColor) => {
	setSquareColor(squareColor);
};

export default App;
