import PropTypes from 'prop-types';
import { Component } from 'react';
import { Lable, Input, Forma } from './Form.styled';
import { Button } from '../ContactList/ContactsList.styled';

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleValueInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Forma onSubmit={this.handleSubmit}>
        <Lable>
          Name
          <Input
            value={this.state.name}
            onChange={this.handleValueInputChange}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="
            Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Lable>

        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleValueInputChange}
            placeholder="___-__-__"
          />
        </Lable>
        <Button type="submit">Add contact</Button>
      </Forma>
    );
  }
}
