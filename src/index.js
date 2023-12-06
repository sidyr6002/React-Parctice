import React from "react";
import { createRoot } from "react-dom/client";
import Div from "./Div.jsx";
import Child from "./Child.jsx";

const el = document.getElementById("app");
const root = createRoot(el);

const child = Child({ name: "Submit" });
const div = Div({ className: "container", children: [child]});

root.render(div);
