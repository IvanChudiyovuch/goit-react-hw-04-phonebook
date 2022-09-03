import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { Container } from './Container.styled';

// import initialContacts from './Contacts/Contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    let newContact = {
      id: nanoid(5),
      name,
      number,
    };

    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <Container>
      <h1>Phonebook</h1>

      <Form onSubmit={addContacts} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />

      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
