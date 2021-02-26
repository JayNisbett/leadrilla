import React from 'react'

export default function WebsiteQuoteBanner() {
  return (
    <div className="lr-section">
      <div bp="grid">
        <div bp="12 11@md">
          <div className="WebsiteQuoteBanner gutter-padding">
            <div bp="grid">
              <div bp="12 8@lg offset-2@lg 7@xl offset-3@xl">
                <div className="website-quote" bp="margin-bottom">"I love the dashboard! I can easily book appointments using only my cell phone. I even booked 2 at church this past Sunday (Don’t tell my pastor)."</div>
                <div className="website-quote-author">
                  - Mark D.
                <span className="website-quote-author-subtitle">Las Vegas, NV</span>
                </div>
              </div>
              <div bp="12 3@lg 2@xl" className="website-quote-banner-cta-container">
                <a className="btn btn-white btn-xl" href="/signup">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}