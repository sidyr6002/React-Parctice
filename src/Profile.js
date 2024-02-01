import { useContext } from "react";
import UserContext from "./context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext);

    if (!user || !user.name) {
        return (
            <div className="profile">
                <h1>Please Login</h1>
            </div>
        )
    }

    return (
        <div className="profile">
                <h1>Profile</h1>
                <h2>User : {user?.name}</h2>
        </div>
    )
}

export default Profile;