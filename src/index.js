import React from "react";
import { createRoot } from "react-dom/client";
import Morning from "./Morning";
import Div from "./Div";
import ExampleComponent from "./Count";
import Count from "./Count";


const el = document.getElementById("app");
const root = createRoot(el);

const Comb = () => {
    return <Div className="container">
        <Count></Count>
    </Div>
}

root.render(<Comb/>);
