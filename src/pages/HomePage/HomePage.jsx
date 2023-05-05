import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './HomePage.module.css';
import { Card } from "@mui/material";

export default function HomePage () {
    const name = useSelector(authSelectors.getUsername);
    return <div>
        <Card variant="outlined">
        <h1 className={css.greeting}>Hello, {name}!</h1>
        <p className={css.greeting}>This is your personal Phonebook</p>
        <p className={css.greeting}>You could find your contacts here</p>
        </Card>
    </div>
};