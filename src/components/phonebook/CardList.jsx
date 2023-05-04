import React from "react";
import css from './CardList.module.css';
import { Button } from "@mui/material";

const CardList = ({contacts, onDeleteContact}) => (
<ul>
    {contacts.map(({id, name, number}) => (
    <li key={id} className={css.user}>
        <p className={css.name}>{name}: {number}</p>
        <Button variant="outlined" type="button" onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
    ))}
    </ul>
);

export default CardList;