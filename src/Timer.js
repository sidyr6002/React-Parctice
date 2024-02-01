// Write a timer funtion with a button when pressed will start the timer from 0 and then pressed again will stop the timer

import { useEffect, useState, useRef } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(() => {
            console.log("Set Interval has been called");
            setTime((prev) => prev + 1);
        }, 1000);
        console.log(
            "Use Effect has been called, Interval Ref: " + interval.current
        );
        return () => stopTimer();
    }, []);

    const stopTimer = () => {
        console.log(
            "Stop Timer has been called. Interval Ref: " + interval.current
        );
        return clearInterval(interval.current);
    };

    return (
        <div>
            <h3>Time: {time}</h3>
        </div>
    );
};

export default Timer;
