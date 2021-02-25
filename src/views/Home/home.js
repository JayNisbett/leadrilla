import React from 'react';
import IntroHero from 'components/IntroHero/intro_hero';
import NumbersSay from 'components/NumbersSay/number_say';
import WebsitePlatformOverview from 'components/WebsitePlatformOverview/website_platform_overview';
import WebsiteQuoteBanner from 'components/WebsiteQuoteBanner/website_quote_banner';
import WebsiteQuoteBanner6 from 'components/WebsiteQuoteBanner/website_quote_banner6';
import WebsiteCompliance from 'components/WebsiteCompliance/website_compliance';
import WebsitePartnersSection from 'components/WebsitePartnersSection/website_partners_section';

export default function Home() {
  return (
    <div className="Home" >
      <div className="WebsitePageContent">
        <div className="page-content">
          <div className="lr-page">
            <IntroHero />
            <NumbersSay />
            <WebsitePlatformOverview />
            <WebsiteQuoteBanner />
            <WebsiteCompliance />
            <WebsiteQuoteBanner6 />
            <WebsitePartnersSection />
            <div className="lr-section" bp="padding-bottom--none">
              <div bp="grid">
                <div bp="12 10@xl offset-2@xl">
                  <div bp="grid" className="website-cta-section">
                    <div bp="12 7@lg" className="website-ready-cta-section">
                      <h1>Ready?</h1>
                      <p>Start growing your business today with Leadrilla’s automated lead generation platform. We can’t wait to see you grow.</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}