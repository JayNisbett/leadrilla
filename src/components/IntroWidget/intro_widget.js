import React from 'react';
export default function IntroWidget() {
  return (
    <div>
      <div className="intro-widget">
        <div className="intro-widget_body" bp="12 container">
          <h1>simple, poweful, trustworthy.</h1>
          <p>Join thousands of people growing their business with Leadrilla - the only platform that gives you full control over your lead flow, <span>Ready? Select your industry</span></p>
          <div className="intro-widget-buttons">
            <button className="signup-btn btn btn-white">life insurance</button>
            <button className="signup-btn btn btn-white">medicare</button>
            <button className="signup-btn btn btn-white">solar</button>
            <div>
              <a>I'm in a differenct indstry</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}