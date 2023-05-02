import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { logOut } from '../redux/auth/authOperations';

export default function UserMenu () {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div>
          <h2>User: {name}</h2>
          <p>Email: {email}</p>
          <nav>
            <NavLink to="/">
              Homepage
            </NavLink>
            <NavLink to="/contacts">
              My Contacts
            </NavLink>
          </nav>
          <button onClick={() => dispatch(logOut())}>
            SIGN OUT
          </button>
        </div>
      ); 
}