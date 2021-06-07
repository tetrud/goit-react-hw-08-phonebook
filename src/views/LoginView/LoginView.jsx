import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import Button from '../../components/Button/Button';
import { authOperations } from '../../redux/auth';
import '../Form.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <section className="Section">
        <Title title="Login" className="Title" />

        <form onSubmit={this.handleSubmit} autoComplete="off" className="Form">
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

          <Button className="Form__button" type="submit" text="Enter" />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
