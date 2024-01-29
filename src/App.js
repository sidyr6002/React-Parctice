import { useRef, useState } from "react";
import ButtonWithTooltip from "./ButtonWithTooltip.js";
import Timer from "./Timer.js";
import Button from "./Button.js";
import Input from "./Input.js";

const App = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const input = useRef(null);

    const submitText = () => {
        console.log(input.current.getBoundingClientRect())
        setDisabled(!disabled);
        if (disabled) {
            input.current.value = "";
        }
    }

    return (
        <>
            {showTimer && <Timer/>}
            <Button onClick={() => setShowTimer(!showTimer)}>{showTimer ? "Stop" : "Start"} Timer</Button>
            <br></br>
            <Input refer={input} disabled={disabled} placeholder="Enter Text"/>
            <Button onClick={submitText}>{disabled ? "Enable" : "Disable"} the input</Button>
            <Button onClick={() => console.log("Value: " + input.current.value)}>Log Value</Button>
        </>
    );
};

export default App;
