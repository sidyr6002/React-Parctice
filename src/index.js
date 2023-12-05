import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import Div from "./Div";
import Child from "./Child";
import Button from "./Button";

const el = document.getElementById("app");
const root = createRoot(el);

const child = Child({ name: "S Y Rahul" });
const button = Button({ class: "btn" , title: "Submit"});


root.render(Div({class: "container", children: [child, button]}));
