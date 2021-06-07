import { connect } from 'react-redux';
import { Component } from 'react';

import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import ContactFilter from '../../components/ContactFilter';
import { contactsOperations } from '../../redux/contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <section className="Section">
        <ContactForm />
        <ContactFilter />
        <ContactsList />
      </section>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsView);
