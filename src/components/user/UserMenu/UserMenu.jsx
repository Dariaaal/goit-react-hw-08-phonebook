import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';
import { Button } from "@mui/material";

export default function UserMenu () {

    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div className={css.user}>
          <nav className={css.nav}>
            <p><NavLink to="/homepage">
            <Button variant="outlined">Homepage</Button>
            </NavLink></p>
            <p><NavLink to="/contacts">
            <Button variant="outlined">My contacts</Button>
            </NavLink></p>
          </nav>
          <p className={css.email}>{email}</p>
          <NavLink to="/">
          <Button type="submit" variant="contained" onClick={() => dispatch(authOperations.logOut())}>Sign out</Button>
          </NavLink>
        </div>
      ); 
}