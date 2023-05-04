import React, { useEffect } from "react";
import CardForm from "../components/phonebook/CardForm";
import CardList from "../components/phonebook/CardList";
import Filter from "../components/phonebook/Filter";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/contacts/filterReducer";
import * as contactsOperations from "../redux/contacts/contactsOperations";
import * as contactsSelectors from "../redux/contacts/contactsSelectors";
import { Card } from "@mui/material";

export default function Contacts() {
    
    const dispatch = useDispatch();

    const contacts = useSelector(contactsSelectors.getContacts);

    const filter = useSelector(state => state.filter);

    useEffect(() => {
      dispatch(contactsOperations.fetchContacts());
    },[dispatch])

  const formSubmitHandler = data => {

    const contact = {
      id: nanoid(),
      ...data
    }

    const dublicateContact = contacts.find(item => item.name === contact.name)

    if (dublicateContact) {
      return alert (`${data.name} is already in contacts` )
    }

    dispatch(contactsOperations.addContact(contact));
  }

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
 }
 
  const changeFilter = e => {
    const filterValue = e.target.value
     dispatch(setFilter(filterValue));
   }

   const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >

        <Card variant="outlined"><CardForm onSubmit={formSubmitHandler}/></Card>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={changeFilter}/>
        <CardList contacts={visibleContacts} onDeleteContact={onDeleteContact}/>
        </div>
      );
}