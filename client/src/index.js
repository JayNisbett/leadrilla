import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { routes, renderRoute } from './routes'
import AuthProvider, { UserContext } from './components/AuthProvider/auth_provider'
import NotificationBar from './components/NotificationBar/notification_bar'
// import { Provider } from 'react-redux';
// import store from './store';

import './styles/styles.css'
import './styles/styles.scss'

render(
  <Router>
    {/* <Provider store={store}> */}
    <AuthProvider>
      <NotificationBar>
        <UserContext.Consumer>
          {({ user }) => <Switch>{routes.map(route => renderRoute(route, user))}</Switch>}
        </UserContext.Consumer>
      </NotificationBar>
    </AuthProvider>
    {/* </Provider> */}
  </Router>,
  document.getElementById('root')
)
