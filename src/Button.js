// Custom button invoke custom funtion 

const Button = ({ children: text, onClick }) => {
    return (
        <button style = {{margin: "0 20px 0 0"}}onClick={onClick}>{text}</button>
    )
}

export default Button