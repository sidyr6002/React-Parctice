import React, { useState, useCallback} from "react";
import Button from "./Button";

// this is component that will show morning message and when clicked it will change to afternoon
const Morning = () => {
    const [morning, setMorning] = useState("Good Morning, Rahul");

    const handleClick = () => {
        setMorning((prevMessage) => {
            console.log('handle click function called!');
            console.log("Before: ", prevMessage)
            return "Good Afternoon, Rahul"
        });
    }

    console.log('Component rendered!');

    return <>
        <p>{morning}</p>
        <Button clickFunc={handleClick}>Click</Button>
    </>
}

export default Morning