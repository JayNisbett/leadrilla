import React from 'react'
import partner1 from 'assets/img/partners/active-prospect-logo.svg'
import partner2 from 'assets/img/partners/px-logo.svg'
import partner3 from 'assets/img/partners/google-ads.svg'
import partner4 from 'assets/img/partners/facebook-logo.svg'
import partner5 from 'assets/img/partners/trusted-form-logo.svg'
import partner6 from 'assets/img/partners/leads-council-logo.png'
import partner7 from 'assets/img/partners/anura-logo.svg'

export default function WebsitePartnersSection() {
  return (
    <div className="lr-section WebsitePartnersSection">
      <div bp="grid">
        <div bp="12 10@xl offset-2@xl" className="text-center">
          <h1>We've partnered with the&nbsp;
            <span className="emphasis">best in the biz</span>.
          </h1>
          <div bp="grid">
            <div bp="12 6@md 4@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a href="https://activeprospect.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="logo"
                      src={partner1}
                      alt="ActiveProspect logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 4@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a
                    href="https://px.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="px"
                  >
                    <img
                      className="logo"
                      src={partner2}
                      alt="PX logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 4@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src={partner3}
                      alt="Google Ads logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 3@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a href="https://www.facebook.com/business/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="logo"
                      src={partner4}
                      alt="Facebook logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 3@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a href="https://activeprospect.com/products/trustedform/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="logo"
                      src={partner5}
                      alt="TrustedForm logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 3@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a
                    href="https://www.leadscouncil.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="leads-council"
                  >
                    <img
                      src={partner6}
                      alt="LeadsCouncil logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div bp="12 6@md 3@lg padding--lg">
              <div bp="vertical-center grid" className="partner-item">
                <div bp="12">
                  <a href="https://www.anura.io/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="logo"
                      src={partner7}
                      alt="Anura logo"
                      data-nsfw-filter-status="sfw"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}