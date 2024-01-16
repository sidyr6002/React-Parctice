import React from "react";

const Div = (props) => {
  const {children, className} = props

  return <div className={className}>{children}</div>;
};

export default Div;
