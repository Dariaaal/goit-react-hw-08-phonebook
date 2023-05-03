import { useSelector } from "react-redux";
import { Route, Navigate  } from "react-router-dom";
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute({
    component: Component,
    redirectTo,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Navigate to={redirectTo}/> : Component}
        </Route>
    );
}