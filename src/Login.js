import { useState, useContext } from "react";
import UserContext from "./context/UserContext";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);
    const login = () => {
        console.log("Login: " + userName);
        setUser({ name: userName, password: password });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Username"
            ></input>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            ></input>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;