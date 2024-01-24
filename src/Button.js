import React, { memo } from "react";

const Button = memo((props) => {
    const { clickFunc, children } = props;
    console.log('Child component rendered!');
    return <button onClick={clickFunc}>{children}</button>;
});

export default Button;
