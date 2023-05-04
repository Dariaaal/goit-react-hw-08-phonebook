import { NavLink } from "react-router-dom";
import css from './AuthMenu.module.css';

export default function AuthMenu () {
    return (
        <div className={css.options}>
           <p><NavLink to='/register' className={css.link}>Sign up</NavLink></p>
           <p><NavLink to='/login' className={css.link}>Sign in</NavLink></p>
        </div>
    );
}