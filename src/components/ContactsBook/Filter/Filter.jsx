import PropTypes from 'prop-types';
import { Lable, Input } from '../Form/Form.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Lable>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Lable>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
