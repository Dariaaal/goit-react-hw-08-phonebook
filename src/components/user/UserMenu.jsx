import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';

export default function UserMenu () {

    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div>
          <nav>
            <NavLink to="/homepage">
              Homepage
            </NavLink>
            <NavLink to="/contacts">
              My Contacts
            </NavLink>
          </nav>
          <p>{email}</p>
          <NavLink to="/"><button onClick={() => dispatch(authOperations.logOut())}>
            SIGN OUT
          </button>
          </NavLink>
        </div>
      ); 
}