import { NavLink } from "react-router-dom";
import css from './AuthMenu.module.css';
import { Button } from "@mui/material";

export default function AuthMenu () {
    return (
        <div className={css.options}>
           <p><NavLink to='/register'><Button variant="contained">Sign up</Button></NavLink></p>
           <p><NavLink to='/login'><Button variant="contained">Sign in</Button></NavLink></p>
        </div>
    );
}