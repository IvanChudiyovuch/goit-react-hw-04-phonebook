import PropTypes from 'prop-types';
import { Button, ItenInfoText } from './ContactsList.styled';

export const ContactsListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <ItenInfoText>{name}:</ItenInfoText>
      <ItenInfoText>{number}</ItenInfoText>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
