import Login from "./Login.js";
import Profile from "./Profile.js";
import UserContextProvider from "./context/UserContextProvider.js";

const App = () => {
    /* Get name and age of each person */
    return (
        <>
            <UserContextProvider>
                <Login />
                <Profile />
            </UserContextProvider>
        </>
    );
};

export default App;
