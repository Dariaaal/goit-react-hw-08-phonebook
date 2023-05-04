import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import css from './UserMenu.module.css'

export default function UserMenu () {

    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div className={css.user}>
          <nav className={css.nav}>
            <p><NavLink to="/homepage" className={css.link}>
              Homepage
            </NavLink></p>
            <p><NavLink to="/contacts" className={css.link}>
              My Contacts
            </NavLink></p>
          </nav>
          <p className={css.email}>{email}</p>
          <NavLink to="/"><button onClick={() => dispatch(authOperations.logOut())} className={css.button}>
            SIGN OUT
          </button>
          </NavLink>
        </div>
      ); 
}