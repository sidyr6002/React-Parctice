import { memo } from "react";

const Input = (props) => {
    const {onChange, placeholder} = props;
    console.log("Search has been rendered");
    return <input className ="input" onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>;
};

export default memo(Input);
