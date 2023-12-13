import { useMemo,useState } from 'react';

export const MemoExample = () => {

	console.log("Rendering component...")

	const [numberObj, setNumberObj] = useState({ input: 0 });
	const [inputValue,setInputValue] = useState('');
	const doubleNumber = useMemo(() => {return slowFunction(numberObj.input);},[numberObj.input]);
	 

	return (
		<>
			<h2>useMemo</h2>
			<input
				value={inputValue}
				type='text'
				onChange={(e)=>setInputValue((e.target.value))}
			/>

			<button onClick={() => setNumberObj({ input:(inputValue!==''?parseInt(inputValue):0) })}>Double</button>

			<p className='use-memo__text'>{doubleNumber}</p>
		</>
	);
};

function slowFunction(num: number) {
	console.log('calling slow function... 🐌');
	for (let i = 0; i <= 1000000000; i++) {
		// ⏰
	}
	const result = num * 2;
	console.log(`result: ${result}`);
	return result;
}
