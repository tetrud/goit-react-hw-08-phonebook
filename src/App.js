import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';
import routes from './routes';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              exact
              path={routes.home}
              restricted
              redirectTo={routes.contacts}
              component={HomeView}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
