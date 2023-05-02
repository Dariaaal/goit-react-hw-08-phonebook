import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';

export default function UserMenu () {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div>
          <nav>
            <NavLink to="/">
              Homepage
            </NavLink>
            <NavLink to="/contacts">
              My Contacts
            </NavLink>
          </nav>
          <h2>User: {name}</h2>
          <p>Email: {email}</p>
          {/* <button onClick={() => dispatch(authOperations.logOut())}>
            SIGN OUT
          </button> */}
        </div>
      ); 
}