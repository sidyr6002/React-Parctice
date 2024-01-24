// Wrtie a time that will increment every second

import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("The timer is running......");
            setCount((prevCount) => {
                return prevCount + 1;
            });
        }, 1000);
        console.log("The timer is created, id: ", interval);
        return () => {
            console.log("The timer is being cleaned up, id: ", interval);
            clearInterval(interval);
        }
    }, []);

    return <h2>Time: {count}</h2>;
};

export default Timer;
