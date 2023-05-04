import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './HomePage.module.css'

export default function HomePage () {
    const name = useSelector(authSelectors.getUsername);
    return <div>
        <h1 className={css.greeting}>Hello, {name}!</h1>
    </div>
};