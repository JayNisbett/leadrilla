import { func } from 'prop-types'
import React from 'react'

export default function BottonContact() {
  return (
    <div className="lr-section" bp="padding-bottom--none">
      <div bp="grid">
        <div bp="12 10@xl offset-2@xl">
          <div bp="grid" className="website-cta-section">
            <div bp="12 7@lg" className="website-ready-cta-section">
              <h1>Ready?</h1>
              <p>Start growing your business today with liveleads’s automated lead generation platform. We can’t wait to see you grow.</p>
              <a className="btn btn-white btn-xl" href="/signup">Get started</a>
            </div>
            <div bp="12 5@lg" className="website-not-ready-cta-section">
              <h1>Still not sure?</h1>
              <p>Let's chat! We’d be happy to answer any questions you have.</p>
              <a className="btn btn-transparent-bordered-blue" href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}