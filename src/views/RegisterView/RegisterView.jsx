import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import Button from '../../components/Button/Button';
import { authOperations } from '../../redux/auth';
import '../Form.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <section className="Section">
        <Title title="Register" className="Title" />

        <form className="Form" onSubmit={this.handleSubmit} autoComplete="off">
          <label className="Form__label">
            <input
              className="Form__input"
              type="text"
              name="name"
              value={name}
              placeholder=" "
              required
              onChange={this.handleChange}
            />
            <span className="Form__span">Name</span>
          </label>

          <label className="Form__label">
            <input
              className="Form__input"
              type="email"
              name="email"
              value={email}
              placeholder=" "
              required
              onChange={this.handleChange}
            />
            <span className="Form__span">Email</span>
          </label>

          <label className="Form__label">
            <input
              className="Form__input"
              type="password"
              name="password"
              value={password}
              placeholder=" "
              required
              onChange={this.handleChange}
            />
            <span className="Form__span">Password</span>
          </label>

          <Button className="Form__button" type="submit" text="Register" />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
