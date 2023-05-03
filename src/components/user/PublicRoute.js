import { useSelector } from "react-redux";
import { Route, Navigate  } from "react-router-dom";
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute({
    component: Component,
    redirectTo,
    restricted = false,
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo}/> : Component
}