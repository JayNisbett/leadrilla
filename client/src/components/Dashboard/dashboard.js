import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import classnames from 'classnames'
import { isEmpty } from 'lodash'
import { DateTime } from 'luxon'
import ReactPixel from 'react-facebook-pixel'

import logo from '../../assets/svg/liveleads-icon-white.svg'
import logo_black from '../../assets/svg/liveleads-icon-black.svg'
import { MEDIUM } from '../../constants/screen_sizes'
import { UserContext } from '../AuthProvider/auth_provider'
import { OK } from '../../constants/error_codes'
import backend from '../../backend'
import JoinFacebookGroup from '../JoinFaceBookGroup/join_facebook_group'
// import RemainingSpendForReferralBanner from '../RemainingSpendForReferralBanner/remaining_spend_for_referral_banner'

export const DarkModeContext = React.createContext(null)

function Dashboard(props) {
  useEffect(() => {
    localStorage.setItem('theme', 'life-theme')
    document.getElementsByTagName('html')[0].className = 'life-theme'
  }, [])

  const [sideBarOpenClass, setSideBarOpenClass] = useState(false)
  const { user, setUser, removeUser } = useContext(UserContext)

  // useEffect(() => {
  //   ReactPixel.init(
  //     '131421414731031',
  //     {
  //       external_id: user.id.toString()
  //     },
  //     {
  //       autoConfig: true,
  //       debug: true
  //     }
  //   )
  // }, [])

  // If a user hasn't completed Onboarding, send them there
  // if (
  //   !user.onboarded &&
  //   !(
  //     props.location.pathname.includes('onboarding') || props.location.pathname.includes('settings')
  //   )
  // ) {
  //   props.history.push('/dash/onboarding')
  // }

  // const credits =
  //   user.points > 0
  //     ? (user.points / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  //     : '0.00'

  const logOut = () => {
    // removeUser()
    // props.history.push('/')
  }

  const openSideBar = () => {
    setSideBarOpenClass('side-bar-open')
  }

  const closeSideBar = () => {
    setSideBarOpenClass(false)
  }

  const checkWindowWidth = () => {
    if (window.innerWidth <= MEDIUM) {
      closeSideBar()
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    return () => {
      window.removeEventListener('resize', checkWindowWidth)
    }
  }, [])

  // useEffect(() => {
  //   if (!user.city) {
  //     props.history.push('/signup/info')
  //   }
  // }, [])

  // const hasRecommendations = !user.amount_spent && !isEmpty(user.recommendations)

  const navItems = [
    { to: '/dash/metrics', text: 'Metrics', admin: true, user: false },
    { to: '/dash/lead-feeds', text: 'Lead Feeds', admin: true, user: true },
    { to: '/dash/marketplace', text: 'Marketplace', admin: true, user: true },
    { to: '/dash/leads', text: 'My Leads', admin: true, user: true },
    // { to: '/dash/leads', text: user.is_admin ? 'Leads' : 'My Leads', admin: true, user: true },
    { to: '/dash/billing', text: 'Billing', admin: false, user: true },
    { to: '/dash/users', text: 'Users', admin: true, user: false },
    { to: '/dash/products', text: 'Products', admin: true, user: false },
    { to: '/dash/promotions', text: 'Promotions', admin: true, user: false },
    { to: '/dash/settings', text: 'Settings', admin: true, user: true },
    { to: '/dash/faq', text: 'FAQ', admin: false, user: true }
  ]

  const renderSideBar = () => {
    return (
      <div className={classnames('side-bar', sideBarOpenClass)} bp="fit padding">
        <div>
          <div bp="grid">
            <div bp="12 text-center">
              <Link to="/">
                <SVG className="logo" src={logo} />
              </Link>
            </div>
          </div>

          <div bp="margin-top--lg">
            {/* {!user.onboarded ? (
              <>
                <NavLink
                  to="/dash/onboarding"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={closeSideBar}
                >
                  Get Started
                </NavLink>

                <NavLink
                  to="/dash/settings"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={closeSideBar}
                >
                  Settings
                </NavLink>
              </>
            ) : ( */}
            <>
              {/* {hasRecommendations ? ( */}
              <NavLink
                to="/dash/onboarding"
                className="nav-link"
                activeClassName="nav-link-active"
                onClick={closeSideBar}
              >
                Get Started
                </NavLink>
              {/* ) : null} */}

              {navItems.map((item, i) => {
                // if ((user.is_admin && item.admin) || (!user.is_admin && item.user)) {
                return (
                  <NavLink
                    key={i}
                    to={item.to}
                    className="nav-link"
                    activeClassName="nav-link-active"
                    onClick={closeSideBar}
                  >
                    {item.text}
                  </NavLink>
                )
                // }
                // return null
              })}
            </>
            {/* )} */}
          </div>

          {/* <RemainingSpendForReferralBanner /> */}

          <div className="nav-bottom dark-grey-text">
            {/* <p bp="margin-bottom--lg" className="font-size-sm">
              Have a question? Email us at{' '}
              <a
                className="bold"
                href="mailto:hello@liveleads.com?subject=liveleads Support Request"
              >
                hello@liveleads.com
              </a>
            </p> */}
            <button id="logout-btn" className="nav-link white-text" onClick={logOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    )
  }

  // const isImpersonation = user.impersonator && user.impersonator.email

  const cancelImpersonation = async () => {
    const {
      status,
      body: { jwt, user: u }
    } = await backend.get('/users/impersonate/cancel')

    if (status === OK) {
      setUser(u, jwt)
      props.history.push(`/dash/users/${user.id}`)
    }
  }

  // const [darkMode, setDarkMode] = useState(user.dark_mode)

  // const hasNotDismissedFbBanner = !user.metadata || !user.metadata.dismissed_fb_group_banner
  // const onboardedOrNew =
  //   user.onboarded || Math.abs(DateTime.fromISO(user.created_at).diffNow('days').days) < 3

  if (process.env.REACT_APP_MAINTENANCE_MODE === 'true') {
    return (
      <div bp="grid vertical-center" style={{ minHeight: '100%' }}>
        <div bp="12" className="text-center lr-large-text">
          <div>
            liveleads is currently down for maintenance, which is expected to last for approximately
            30 minutes. We apologize for any inconvenience caused.
          </div>
          <Link to="/" className="blue-text">
            Return to home page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* {!isImpersonation ? null : (
        <div bp="full-width 12 padding text-center" className="impersonation-banner">
          <span>
            Impersonating {user.name} ({user.email})
          </span>
          <button
            onClick={cancelImpersonation}
            bp="margin-left"
            className="btn-link-inherit-style white-text cursor-pointer"
          >
            &#10005;
          </button>
        </div>
      )} */}

      {/* {!isImpersonation && hasNotDismissedFbBanner && !onboardedOrNew ? (
        <JoinFacebookGroup />
      ) : null} */}

      <div
        className={classnames('Dashboard')}
      >
        {renderSideBar()}

        <div className="dash-page" bp="fill">
          <div
            className={classnames('side-bar-mask lr-no-select', sideBarOpenClass)}
            onClick={closeSideBar}
          />

          {/* mobile header */}
          <div className="mobile-header" bp="hide@md margin-bottom--lg">
            <div bp="grid">
              <div
                className={classnames('side-bar-btn lr-no-select', sideBarOpenClass)}
                bp="1"
                onClick={openSideBar}
              >
                <span className="lr-burger-btn grey" />
              </div>
              <div bp="2 offset-6">
                <SVG className="logo" src={logo} />
              </div>
            </div>
          </div>

          {/* Dash Page body */}
          <DarkModeContext.Provider>
            {props.children}
          </DarkModeContext.Provider>

          {/* {!user.is_admin &&
            !props.location.pathname.includes('refer') &&
            !props.location.pathname.includes('onboarding') ? ( */}
          <div className="refer-pill-container">
            <Link to="/dash/refer" className="pill-sm pill-blue white-text">
              EARN $50 <span bp="hide show@md">LEAD</span> CREDIT
              </Link>
            <span className="credit-balance">
              {/* Your Credit: <strong>${credits}</strong> */}
                  Your Credit: <strong>$ 50</strong>
            </span>
          </div>
          {/* ) : null} */}
        </div>
      </div>
    </>
  )
}

export default Dashboard
