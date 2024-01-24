import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Div from "./Div";
import Timer from "./Timer";
import Button from "./Button";

const el = document.getElementById("app");
const root = createRoot(el);

const App = () => {
    const [showTimer, setShowTimer] = useState(true);

    const toggleTimer = () => {
        setShowTimer(!showTimer);
    };

    return (
        <>
            <Div className="container">
                {showTimer && <Timer /> }
                <Button clickFunc={toggleTimer}>
                    {showTimer ? "Stop" : "Start"} Timer
                </Button>
            </Div>
        </>
    );
};

root.render(<App />);
