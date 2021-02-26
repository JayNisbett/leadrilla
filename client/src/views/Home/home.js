import React from 'react';
import IntroHero from 'components/IntroHero/intro_hero';
import NumbersSay from 'components/NumbersSay/number_say';
import WebsitePlatformOverview from 'components/WebsitePlatformOverview/website_platform_overview';
import WebsiteQuoteBanner from 'components/WebsiteQuoteBanner/website_quote_banner';
import WebsiteQuoteBanner6 from 'components/WebsiteQuoteBanner/website_quote_banner6';
import WebsiteCompliance from 'components/WebsiteCompliance/website_compliance';
import WebsitePartnersSection from 'components/WebsitePartnersSection/website_partners_section';
import BottonContact from 'components/BottomContact/bottom_contact';

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
            <BottonContact />
          </div>
        </div>
      </div>
    </div>
  )
}