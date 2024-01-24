import React, { memo } from "react";

const Button = memo((props) => {
    const { clickFunc } = props;
    console.log('Child component rendered!');
    return <button onClick={clickFunc}>Click Me</button>;
});

export default Button;
