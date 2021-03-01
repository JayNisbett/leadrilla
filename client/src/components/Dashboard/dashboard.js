import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import classnames from 'classnames'
import logo from '../../assets/svg/logo.svg'
import { MEDIUM } from '../../constants/screen_sizes'
import RemainingSpendForReferralBanner from '../RemainingSpendForReferralBanner/remaining_spend_for_referral_banner'

export default function Dashboard(props) {

  const user = useSelector(store => (store?.auth ?? {}))?.data?.user ?? ''
  const [sideBarOpenClass, setSideBarOpenClass] = useState(false)

  const logOut = () => {
    props.history.push('/')
  }

  const openSideBar = () => {
    setSideBarOpenClass('side-bar-open')
  }

  const closeSideBar = () => {
    setSideBarOpenClass(false)
  }

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth <= MEDIUM) {
        closeSideBar()
      }
    }
    window.addEventListener('resize', checkWindowWidth)
    return () => {
      window.removeEventListener('resize', checkWindowWidth)
    }
  }, [])

  const renderSideBar = () => {
    return (
      <div className={classnames('side-bar', sideBarOpenClass)} bp="fit padding">
        <div>
          <div bp="grid">
            <div bp="12 text-center">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>

          <div bp="margin-top--lg">
            {!user.onboarded ? (
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
            ) : (
                <>
                  {hasRecommendations ? (
                    <NavLink
                      to="/dash/onboarding"
                      className="nav-link"
                      activeClassName="nav-link-active"
                      onClick={closeSideBar}
                    >
                      Get Started
                    </NavLink>
                  ) : null}

                  {navItems.map((item, i) => {
                    if ((user.is_admin && item.admin) || (!user.is_admin && item.user)) {
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
                    }
                    return null
                  })}
                </>
              )}
          </div>

          <RemainingSpendForReferralBanner />

          <div className="nav-bottom dark-grey-text">
            <button id="logout-btn" className="nav-link white-text" onClick={logOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    )
  }

  const hasRecommendations = !user?.amount_spent && !isEmpty(user?.recommendations)

  const navItems = [
    { to: '/dash/metrics', text: 'Metrics', admin: true, user: false },
    { to: '/dash/lead-feeds', text: 'Lead Feeds', admin: true, user: true },
    { to: '/dash/marketplace', text: 'Marketplace', admin: true, user: true },
    { to: '/dash/leads', text: user?.is_admin ? 'Leads' : 'My Leads', admin: true, user: true },
    { to: '/dash/billing', text: 'Billing', admin: false, user: true },
    { to: '/dash/users', text: 'Users', admin: true, user: false },
    { to: '/dash/products', text: 'Products', admin: true, user: false },
    { to: '/dash/promotions', text: 'Promotions', admin: true, user: false },
    { to: '/dash/settings', text: 'Settings', admin: true, user: true },
    { to: '/dash/faq', text: 'FAQ', admin: false, user: true }
  ]

  return (
    <>
      <div className="Dashboard">
        {renderSideBar()}<div className="dash-page" bp="fill">
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
                <img src={logo} alt="Logo" />
              </div>
            </div>
          </div>

          {/* Dash Page body */}
          {props.children}

          {!user.is_admin &&
            !props.location.pathname.includes('refer') &&
            !props.location.pathname.includes('onboarding') ? (
              <div className="refer-pill-container">
                <Link to="/dash/refer" className="pill-sm pill-blue white-text">
                  EARN $50 <span bp="hide show@md">LEAD</span> CREDIT
              </Link>
                <span className="credit-balance">
                  Your Credit: <strong>$ 0.00</strong>
                </span>
              </div>
            ) : null}
        </div>
      </div>
    </>
  )
}