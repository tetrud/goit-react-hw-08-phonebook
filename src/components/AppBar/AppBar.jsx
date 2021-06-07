import { connect } from 'react-redux';

import AuthNavigation from '../Navigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="Header">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
