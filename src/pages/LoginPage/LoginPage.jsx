import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperations from '../../redux/auth/auth-operations';
import css from './LoginPage.module.css';
import { Button } from "@mui/material";

export default function LoginPage () {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target:{name, value}}) => {
        switch (name) {
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
        dispatch(authOperations.logIn({email, password}));
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
            <label className={css.label}>
                Email
                <input type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={css.input}
                />
            </label>
            <label className={css.label}>
                Password
                <input type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className={css.input}
                />
            </label>
            <Button type="submit" variant="contained">Log in</Button>
            </form>
        </div>
    )
}