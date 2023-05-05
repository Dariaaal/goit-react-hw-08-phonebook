import React, { useState } from "react";
import { nanoid } from "nanoid";
import css from "./CardForm.module.css";
import { Button, TextField } from "@mui/material";

export default function CardForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const fields = {name, number};

    const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }     
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(fields);
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

        return (
            <form onSubmit={handleSubmit} className={css.card}>
                <TextField
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  onChange={handleInputChange}
                  label="Name"
                />
                <TextField 
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  onChange={handleInputChange}
                  label="Number"
                />
                <Button variant="contained" type="submit">Add contact</Button>
          </form>
        );
}