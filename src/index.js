import React from "react";
import { createRoot } from "react-dom/client";
import Div from "./Div.js";
import Child from "./Child.js";

const el = document.getElementById("app");
const root = createRoot(el);

const Comb = () => {
    return (
        <Div className = "container">
            <Child title="Today's List" />
        </Div>
    );
}

root.render(<Comb/>);
