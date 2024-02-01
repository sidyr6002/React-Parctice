// Custom button invoke custom funtion 

const Button = ({ children: text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button