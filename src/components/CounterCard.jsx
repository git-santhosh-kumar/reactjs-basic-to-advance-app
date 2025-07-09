import { useState } from 'react';

export default function CounterCard() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return (
        <div className="counter-card p-4 border rounded shadow-md w-80">
            <h4 className="text-lg font-semibold mb-2">Counter Card - Component</h4>
            <p className="mb-4">Counter Value: {counter}</p>
            <div className="flex gap-2">
                <button onClick={increment} className="bg-blue-500 text-white px-2 py-1 rounded">Increment</button>
                <button onClick={decrement} className="bg-red-500 text-white px-2 py-1 rounded">Decrement</button>
                <button onClick={reset} className="bg-gray-500 text-white px-2 py-1 rounded">Reset</button>
            </div>
        </div>
    );
}