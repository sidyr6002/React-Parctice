import React, { useState, useCallback } from "react";
import Button from "./Button";

const Count = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Increment function called!");
        setCount((prevCount) => prevCount + 1);
    }, [setCount])

    console.log("Component rendered!");

    return (
        <>
            <p>Count: {count}</p>
            <Button clickFunc={increment}></Button>
        </>
    );
};

export default Count;
