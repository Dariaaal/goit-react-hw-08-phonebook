import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import css from './Navigation.module.css'

export default function Navigation () {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <div className={css.wrap}>
        <h1>Phonebook</h1>
        <div>{isLoggedIn ? <UserMenu/> : <AuthMenu/>}</div>
        </div>
    )
}