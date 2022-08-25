import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { Container } from './Container.styled';
import initialContacts from './Contacts/Contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContacts = ({ name, number }) => {
    let newContact = {
      id: nanoid(5),
      name,
      number,
    };

    this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>

        <Form onSubmit={this.addContacts} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
