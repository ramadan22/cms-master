import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import {
  Provider as AlertProvider,
  AlertOptions,
  transitions,
  positions,
} from 'react-alert';

import Private from './services/middleware/Private';
// import Public from './services/middleware/Public';
// import Roles from './services/middleware/Roles';

import FormManageUsersView from './components/pages/settings/manage-users/form/index';
import AlertTemplate from './components/templates/modals/ModalWindowTemplate';
import ManageUsersView from './components/pages/settings/manage-users';
import Permission from './components/pages/settings/permission';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

import './assets/tailwind/tailwind.output.css';

const options: AlertOptions = {
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
  timeout: 5000,
};

const App = () => (
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
      <GuardProvider guards={[Private]} loading={null} error={null}>
        <Switch>
          <GuardedRoute exact path="/settings/users/form" component={FormManageUsersView} />
          <GuardedRoute exact path="/settings/permission" component={Permission} />
          <GuardedRoute exact path="/settings/users" component={ManageUsersView} />
          <GuardedRoute exact path="/dashboard" component={Dashboard} />
          <GuardedRoute exact path="/" component={Login} />
        </Switch>
      </GuardProvider>
    </AlertProvider>
  </Router>
);

export default App;
