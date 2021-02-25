import React from 'react'

export default function WebsitePlatformOverview() {
  return (
    <div className="lr-section">
      <div bp="grid">
        <div bp="12 container">
          <div className="WebsitePlatformOverview">
            <div bp="grid">
              <div bp="12 5@lg" className="gutter-padding">
                <h1>
                  <span className="emphasis">Your</span> leads.
                  <br />
                  <span className="emphasis">How</span> you want them.
                  <br />
                  <span className="emphasis">When</span> you want them.
                  <br />
                </h1>
              </div>
              <div bp="12 7@lg" className="platform-overview-content light-grey-gradient-bg">
                <p>Leadrilla has two ways of purchasing leads. Lead Feeds let you run your own ads in your area to generate leads for your business. The marketplace has leads that our system has already generated. We recommend utilizing both and compare what gives you a better ROI.</p>
              </div>
            </div>
            <div bp="grid" className="gutter-padding">
              <div bp="12 6@md" className="lead-feed-overview-container">
                <div className="platform-overview-item bordered-section lead-feed-overview">
                  <h2>Lead Feeds</h2>
                  <h3>Exclusive, real-time leads.</h3>
                  <p>Lead feeds are the core of the Leadrilla platform. With a Lead Feed, you set up a few parameters and our software starts running ads on your behalf. When consumers fill out a form, the lead is provided to you within seconds.</p>
                  <a className="bold" href="/lead-feeds">Learn more</a>
                </div>
              </div>
              <div bp="12 6@md" className="marketplace-overview-container">
                <div className="platform-overview-item bordered-section marketplace-overview">
                  <h2>Marketplace</h2>
                  <h3>Aged, lower-budget leads.</h3>
                  <p>When you need leads instantly, the Marketplace allows you pick and choose leads that are available in your area. Marketplace leads are much cheaper than real-time leads, but can still produce a positive ROI for you.</p>
                  <a className="bold" href="/marketplace">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}