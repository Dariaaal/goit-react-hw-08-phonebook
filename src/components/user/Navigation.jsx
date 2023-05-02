import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

export default function Navigation () {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <div>
        <h1>Phonebook</h1>
        {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
        </div>
    )
}