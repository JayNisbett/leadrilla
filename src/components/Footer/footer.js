import React from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import FloatingShapes from '../FloatingShapes/floating_shapes'
import logo from '../../assets/svg/leadrilla-logo-horizontal-white.svg'

function Footer() {
  return (
    <div className="Footer lr-footer lr-primary-bg">
      <FloatingShapes
        preventFloat={true}
        shape="circle"
        shapes={[
          {
            top: '-150px',
            left: '-180px',
            background: 'rgba(255,255,255,.05)',
            border: 'none',
            height: '425px',
            width: '425px'
          },
          {
            top: '-125px',
            left: '120px',
            height: '300px',
            width: '300px'
          },
          {
            bottom: '-200px',
            right: '120px',
            background: 'rgba(255,255,255,.05)',
            border: 'none',
            height: '400px',
            width: '400px'
          },
          {
            bottom: '-50px',
            right: '-100px',
            height: '400px',
            width: '400px'
          }
        ]}
      />
      <div className="footer-content gutter-padding">
        <div bp="12 container">
          <div bp="grid">
            <div bp="12 4@lg">
              <SVG className="full-width footer-logo" src={logo} />
              <p>&copy; 2021 Leadrilla Inc. All rights reserved.</p>
              <p bp="margin-top--lg">
                401 West Main Street, Suite 204
                <br />
                Lexington, KY 40507
              </p>
              <p bp="margin-top--lg">
                <div bp="margin-bottom--sm">
                  <strong>Questions?</strong>
                </div>
                Email us at:
                <br />
                <a href="mailto:hello@leadrilla.com?subject=Leadrilla Support Request">
                  hello@leadrilla.com
                </a>
              </p>
            </div>
            <div bp="12 2@lg" className="footer-link-group">
              <div className="bold footer-link-group-heading" bp="margin-bottom">
                Industries
              </div>
              <Link to="/life" className="footer-link">
                Life Insurance
              </Link>
              <Link to="/medicare" className="footer-link">
                Medicare Supplement
              </Link>
              <Link to="/solar" className="footer-link">
                Solar
              </Link>
            </div>
            <div bp="12 2@lg" className="footer-link-group">
              <div className="bold footer-link-group-heading" bp="margin-bottom">
                Platform
              </div>
              <Link to="/lead-feeds" className="footer-link">
                Lead Feeds
              </Link>
              <Link to="/marketplace" className="footer-link">
                Marketplace
              </Link>
              <Link to="/signup" className="footer-link">
                Sign up
              </Link>
              <Link to="/login" className="footer-link">
                Log in
              </Link>
            </div>
            <div bp="12 2@lg" className="footer-link-group">
              <div className="bold footer-link-group-heading" bp="margin-bottom">
                Company
              </div>
              <Link to="/we-are-hiring" className="footer-link">
                We're Hiring!
              </Link>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="footer-link">
                Terms and Conditions
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
