import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import { List, ListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactsListItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </ListItem>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
