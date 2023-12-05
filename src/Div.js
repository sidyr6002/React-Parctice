import React from "react";

const Div = ({ class: className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Div;
