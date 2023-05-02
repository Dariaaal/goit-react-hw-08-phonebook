import { NavLink } from "react-router-dom";

export default function AuthMenu () {
    return (
        <div>
           <NavLink to='/register'>Sign up</NavLink>
           <NavLink to='/login'>Sign in</NavLink>
        </div>
    );
}