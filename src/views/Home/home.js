import React from 'react';
import IntroHero from 'components/IntroHero/intro_hero';

export default function Home() {
  return (
    <div className="Home" >
      <div className="WebsitePageContent">
        <div className="page-content">
          <div className="lr-page">
            <IntroHero />            
          </div>
        </div>
      </div>
    </div>
  )
}