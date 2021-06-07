import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const AuthNavigation = () => {
  return (
    <div className="Auth__navigation">
      <NavLink
        exact
        className="Navigation"
        activeClassName="Navigation__active"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        exact
        className="Navigation"
        activeClassName="Navigation__active"
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
