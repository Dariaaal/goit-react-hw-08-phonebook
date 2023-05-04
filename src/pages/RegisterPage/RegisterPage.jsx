import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperations from '../../redux/auth/auth-operations';
import css from './RegisterPage.module.css'

export default function RegisterPage () {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target:{name, value}}) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Name
                <input type="text"
                name="name"
                value={name}
                onChange={handleChange}
                />
            </label>
            <label className={css.label}>
                Email
                <input type="email"
                name="email"
                value={email}
                onChange={handleChange}
                />
            </label>
            <label className={css.label}>
                Password
                <input type="password"
                name="password"
                value={password}
                onChange={handleChange}
                />
            </label>
            <button type="submit" className={css.button}>Register</button>
            </form>
        </div>
    )
}