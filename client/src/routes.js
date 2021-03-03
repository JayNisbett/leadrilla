import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

// import Playground from './components/Playground/playground'
import WebsitePage from './components/WebsitePage/website_page'
import Dashboard from './components/Dashboard/dashboard'
import LeadTypeDetailPage from './components/LeadTypeDetailPage/lead_type_detail_page'
import FullPageLoader from './components/FullPageLoader/full_page_loader'
import { LEAD_TYPES } from './constants/lead_types'

const loadable = loader => Loadable({ loader, loading: Loading })

const Loading = props => {
  if (props.pastDelay) {
    return <FullPageLoader />
  } else {
    return null
  }
}

export const routes = [
  {
    name: 'Dashboard',
    exact: false,
    path: '/dash',
    component: Dashboard,
    auth: true,
    children: [
      {
        name: 'Onboarding',
        exact: true,
        path: '/dash/onboarding',
        component: loadable(() => import('./views/Onboarding/onboarding'))
      },
      {
        name: 'ConfirmCreat',
        exact: true,
        path: '/dash/confirm-creat',
        component: loadable(() => import('./views/ConfirmCreat/confirm_creat'))
      }
    ]
  },
  {
    name: 'WebsitePage',
    exact: false,
    path: '/',
    component: WebsitePage,
    children: [
      {
        name: 'Home',
        exact: true,
        path: '/',
        component: loadable(() => import('./views/Home/home'))
      },
      {
        name: 'Life',
        exact: true,
        path: '/life',
        component: loadable(() => import('./views/Life/life'))
      },
      {
        name: 'Medicare',
        exact: true,
        path: '/medicare',
        component: loadable(() => import('./views/Medicare/medicare'))
      },
      {
        name: 'Login',
        exact: true,
        path: '/login',
        component: loadable(() => import('./views/Login/login'))
      },
      {
        name: 'SignUp',
        exact: true,
        path: '/signup',
        component: loadable(() => import('./views/SingUp/signup'))
      },
    ]
  },

]

routes.forEach(route => {
  if (route.name === 'WebsitePage') {
    LEAD_TYPES.forEach(leadType => {
      route.children.splice(route.children.length - 2, 0, {
        name: `Leads - ${leadType.name}`,
        exact: true,
        path: `/leads/${leadType.handle}`,
        component: () => <LeadTypeDetailPage leadType={leadType} />
      })
    })
  }
})

export const renderRoute = (
  {
    name,
    path,
    component,
    env,
    children = [],
    auth = false,
    exact = true,
    admin = false,
    org_admin = false
  },
  user = null
) => {
  if (env && env !== process.env.NODE_ENV) {
    return null
  }

  if (auth && !user) {
    // component = () => <Redirect to={`/login?redirect_url=${window.location.pathname}`} />
  } else if (admin && (!user || !user.is_admin)) {
    component = () => <Redirect to="/dash/leads" />
  } else if (org_admin && !user) {
    // TODO: Redirect to org login page
    component = () => <Redirect to="/" />
  } else if (org_admin && user.type !== 'org_admin') {
    component = () => <Redirect to="/" />
  }

  // TODO: Redirect users from org_admin routes unless user.type === 'org_admin'

  if (children.length) {
    const Component = component

    return (
      <Route
        key={name}
        {...{ exact, path }}
        render={props => (
          <Component {...props}>
            <Switch>{children.map(child => renderRoute(child, user))}</Switch>
          </Component>
        )}
      />
    )
  } else {
    return <Route key={name} {...{ exact, path, component }} />
  }
}
