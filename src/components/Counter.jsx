import { useState } from 'react';
import './Counter.css';

export default function Counter({ children, count: initialCount }) {
    const [count, setCount] = useState(() => (typeof initialCount === 'number' ? initialCount : 0));
    const add = () => setCount((i) => (typeof i === 'number' ? i + 1 : 1));
    const subtract = () => setCount((i) => (typeof i === 'number' ? i - 1 : -1));

    return (
        <>
            <div className="counter">
                <button onClick={subtract}>-</button>
                <pre>{count}</pre>
                <button onClick={add}>+</button>
            </div>
            <div className="counter-message">{children}</div>
        </>
    );
}
