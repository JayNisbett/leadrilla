import React from 'react';
import LifeHero from 'components/LifeHero/life_hero';
import NumbersSay from 'components/NumbersSay/number_say';
import WebsitePlatformOverview from 'components/WebsitePlatformOverview/website_platform_overview';
import WebsiteQuoteBanner from 'components/WebsiteQuoteBanner/website_quote_banner';
import WebsiteQuoteBanner6 from 'components/WebsiteQuoteBanner/website_quote_banner6';
import WebsiteCompliance from 'components/WebsiteCompliance/website_compliance';
import WebsiteLifeProducts from 'components/WebsiteLifeProducts/website_life_products';
import WebsitePartnersSection from 'components/WebsitePartnersSection/website_partners_section';
import BottonContact from 'components/BottomContact/bottom_contact';

export default function Life() {
  return (
    <div>
      <LifeHero />
      <NumbersSay />
      <WebsitePlatformOverview />
      <WebsiteQuoteBanner />
      <WebsiteCompliance />
      <WebsiteQuoteBanner6 />
      <WebsiteLifeProducts />
      <WebsitePartnersSection />
      <BottonContact />
    </div>
  )
}