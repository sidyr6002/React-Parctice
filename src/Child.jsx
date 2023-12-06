import React from "react";
import Button from "./Button.jsx";

export function Child(props) {
  const { name } = props;

  const parentClick = () => {
    console.log("Parent: " + name + " clicked");
  }

  return <Button clickFunc={parentClick}>{name}</Button>
}

export default Child;