import { connect } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';
import Button from '../Button';
import './UserMenu.scss';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className="User">
      <p className="User__description">Welcome, {name}</p>
      <Button
        className="User__button"
        type="button"
        text="Logout"
        onClick={onLogout}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
