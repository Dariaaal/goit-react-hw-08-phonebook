import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export default function HomePage () {
    const name = useSelector(authSelectors.getUsername);
    return <div>
        <h1>Hello, {name}!</h1>
    </div>
};