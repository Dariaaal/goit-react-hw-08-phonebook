import { useSelector } from "react-redux";
import { Route, Navigate  } from "react-router-dom";
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({
    component: Component,
    redirectTo,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? Component : <Navigate to={redirectTo}/>}
        </Route>
    );
}

