import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import logo from '../../assets/svg/logo.svg'

function Navbar(props) {
  const token = useSelector(state => (state?.auth ?? {}))?.token ?? ''
  // const store = useSelector(store => (store))
  const store = useSelector(state => (state))
  const [showMobileDropdown, setShowMobileDropdown] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown)
  }

  const closeMobileDropdown = () => {
    setShowMobileDropdown(false)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  let dashboardLink = '/dash/lead-feeds'

  // if (user && user.type === 'admin') {
  //   dashboardLink = '/dash/metrics'
  // } else if (user && user.type === 'org_admin') {
  //   dashboardLink = '/org-admin/dash'
  // }

  console.log(token, "token", store)

  const renderDropdown = () => {
    let dropdownClass = showMobileDropdown ? 'open' : 'close'
    return (
      <div bp="hide@md padding" className={classnames('lr-dropdown-menu', dropdownClass)}>
        <div bp="grid">
          <div bp="4 offset-5 text-center">
            <Link to="/">
              <SVG className="logo header-logo" src={logo} />
            </Link>
          </div>

          <div onClick={toggleMobileDropdown} bp="4 hide@md float-right">
            <span bp="float-right" className={classnames('lr-burger-btn', burgerButtonClass)} />
          </div>
        </div>

        <div bp="grid 12 padding--sm vertical-start">
          <div bp="grid text-center margin-top--lg">
            <Link bp="12" onClick={closeMobileDropdown} to="/lead-feeds">
              Lead Feeds
            </Link>
            <Link bp="12" onClick={closeMobileDropdown} to="/marketplace">
              Marketplace
            </Link>
            <Link bp="12" onClick={closeMobileDropdown} to="/contact">
              Contact Us
            </Link>
            <Link bp="12" onClick={closeMobileDropdown} to="/life">
              Life Insurance
            </Link>
            <Link bp="12" onClick={closeMobileDropdown} to="/medicare">
              Medicare
            </Link>
            <Link bp="12" onClick={closeMobileDropdown} to="/solar">
              Solar
            </Link>

            {token.length > 0 ? (
              <Link bp="12" onClick={closeMobileDropdown} to={dashboardLink}>
                Dashboard
              </Link>
            ) : null}
          </div>
        </div>

        <div bp="flex" className="mobile-nav-action-btns">
          <Link
            bp="fill margin-right--sm"
            to="/login"
            className="nav-action-btn btn btn-white-bordered-blue"
            onClick={closeMobileDropdown}
          >
            Log in
          </Link>
          <Link
            bp="fill margin-left--sm"
            to="/signup"
            className="nav-action-btn btn btn-primary"
            onClick={closeMobileDropdown}
          >
            Sign up
          </Link>
        </div>
      </div>
    )
  }

  const burgerButtonClass = showMobileDropdown ? 'close' : 'open'

  return (
    <div
      className={classnames(
        'Navbar',
        {
          'navbar-primary':
            props.location.pathname.indexOf('/life') > -1 ||
            props.location.pathname.indexOf('/medicare') > -1
        },
        'system-padding'
      )}
      bp="padding-top"
    >
      <div bp="grid">
        <div bp="12">
          <div bp="flex">
            <div bp="fit padding-right--lg">
              <Link to="/">
                <SVG className="logo" src={logo} />
              </Link>
            </div>

            <div bp="fit hide show@md" className="nav-items">
              <div className="nav-item nav-dropdown-container" bp="padding--none">
                <button id="more" bp="12" onClick={toggleDropdown} className="nav-item btn-link">
                  Industries
                  <FontAwesomeIcon className="fa-icon" icon={faAngleDown} size="1x" />
                </button>
                <div className="nav-dropdown" bp={!showDropdown ? 'hide' : ''}>
                  <Link to="/life" className="nav-dropdown-item" onClick={toggleDropdown}>
                    Life Insurance
                  </Link>
                  <Link to="/medicare" className="nav-dropdown-item" onClick={toggleDropdown}>
                    Medicare
                  </Link>
                  <Link to="/solar" className="nav-dropdown-item" onClick={toggleDropdown}>
                    Solar
                  </Link>
                </div>
              </div>
              <Link to="/lead-feeds" className="nav-item">
                Lead Feeds
              </Link>
              <Link to="/marketplace" className="nav-item">
                Marketplace
              </Link>
            </div>

            <div onClick={toggleMobileDropdown} bp="fill hide@md float-right">
              <span bp="float-right" className={classnames('lr-burger-btn', burgerButtonClass)} />
            </div>

            <div bp="fill hide show@md" className="nav-action-btns nav-items">
              {token.length > 0 ? (
                <Link to={dashboardLink} className="nav-item dashboard-link">
                  Dashboard
                </Link>
              ) : (
                  <>
                    <Link
                      to="/login"
                      className={classnames([
                        'login-btn',
                        'bold',
                        { 'solar-light': props.location.pathname === '/solar' }
                      ])}
                    >
                      Log in
                  </Link>
                    <Link
                      to="/signup"
                      className={classnames([
                        'signup-btn',
                        'btn',
                        'btn-white',
                        { 'solar-light': props.location.pathname === '/solar' }
                      ])}
                    >
                      Sign up
                  </Link>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>

      {renderDropdown()}

      <div className="click-mask" bp={!showDropdown ? 'hide' : ''} onClick={toggleDropdown} />
    </div>
  )
}

Navbar.defaultProps = {
  theme: 'dark'
}

Navbar.propTypes = {
  theme: PropTypes.string
}

export default Navbar
