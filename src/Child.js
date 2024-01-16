import React, { useState } from "react";
import Button from "./Button.js";

export function Child(props) {
        const [data, setData] = useState([
            { id: "a", text: "text 1" },
            { id: "b", text: "text 2" },
            { id: "c", text: "text 3" },
            { id: "d", text: "text 4" },
            { id: "e", text: "text 5" },
        ]);

    const handleClick = () => {
        // Get the last element in the data array
        const lastElement = data[data.length - 1];

        // Generate a new element with an incremented id and text
        const newElement = {
            id: String.fromCharCode(lastElement.id.charCodeAt(0) + 1),
            text: `text ${data.length + 1}`,
        };

        // Add the new element to the data array
        setData((prevData) => [...prevData, newElement]);
    };

    return (
        <>
            <h1>Title: {props.title}</h1>
            {data.map((item) => (
                <h3 key={item.id} id={item.id}>
                    {item.text}
                </h3>
            ))}
            <Button clickFunc={handleClick}>Add Data</Button>
        </>
    );
}

export default Child;
