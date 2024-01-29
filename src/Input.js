const Input = (props) => {
    const {disabled, refer, placeholder} = props;
    console.log("Value Inside Child: " + refer.current.value);
    return <input style = {{margin: "20px 20px 0 0"}} disabled={disabled} ref={refer} placeholder={placeholder}/>;
};

export default Input;
