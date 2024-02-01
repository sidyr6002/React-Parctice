import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from "./features/counter/counterSlice";

const CounterRedux = () => {
    const count = useSelector((state) => state.counter.value);
    const [incrementAmount, setIncrementAmount] = useState(3);
    const [decrementAmount, setDecrementAmount] = useState(3);
    const dispatch = useDispatch();

    console.log("Count", count);

    return (
        <>
            <div className="counter">
                <div className="first">
                    <button onClick={() => dispatch(increment())}>
                        Increase
                    </button>
                    <h1>{count}</h1>
                    <button onClick={() => dispatch(decrement())}>
                        Decrease
                    </button>
                </div>
                <div className="second">
                    <input
                        type="number"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    ></input>
                    <button
                        onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                    >
                        Increment value
                    </button>
                </div>
                <div className="second">
                    <input
                        type="number"
                        value={decrementAmount}
                        onChange={(e) => setDecrementAmount(e.target.value)}
                    ></input>
                    <button
                        onClick={() => dispatch(decrementByAmount(Number(decrementAmount) || 0))}
                    >
                        Decrement value
                    </button>
                </div>
            </div>
        </>
    );
};

export default CounterRedux;
