import { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../Title';
import Button from '../Button';
import { contactsOperations } from '../../redux/contacts';
import './ContactForm.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Title title="Phonebook" className="Title" />

        <div className="Phonebook">
          <form className="ContactForm" onSubmit={this.handleSubmit}>
            <div className="ContactForm__wrap">
              <label className="ContactForm__label">
                <input
                  className="ContactForm__input"
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  placeholder=" "
                />
                <span className="ContactForm__span">Name</span>
              </label>

              <label className="ContactForm__label">
                <input
                  className="ContactForm__input"
                  onChange={this.handleChange}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  placeholder=" "
                />
                <span className="ContactForm__span">Number</span>
              </label>
            </div>

            <Button
              className="ContactForm__button"
              text="Add contact"
              type="submit"
            />
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
