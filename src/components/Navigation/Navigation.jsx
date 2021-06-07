import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      {!isAuthenticated ? (
        <NavLink
          exact
          to="/"
          className="Navigation"
          activeClassName="Navigation__active"
        >
          Home
        </NavLink>
      ) : (
        <NavLink
          exact
          to="/contacts"
          className="Navigation"
          activeClassName="Navigation__active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
