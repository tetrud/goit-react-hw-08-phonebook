import { connect } from 'react-redux';

import Title from '../Title';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import './ContactFilter.scss';

const ContactFilter = ({ value, onChange }) => (
  <div>
    <Title title="Contacts" className="Title" />

    <label className="Filter__label">
      Find contacts by name
      <input
        className="Filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
