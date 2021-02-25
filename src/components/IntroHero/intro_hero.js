import FloatingShapes from 'components/FloatingShapes/floating_shapes';
import React from 'react';

export default function IntroHero() {
  return (
    <div bp="grid vertical-center" id="lr-hero" className="lr-hero lr-primary-bg gutter-padding white-text">
      <FloatingShapes
        shapes={[
          {
            'top': '8%',
            'left': '-5%',
            'background': 'rgba(255, 255, 255, 0.05)',
            'border': 'none',
            'height': '359.808px',
            'width': '359.808px',
            'animation-duration': '17s',
            'opacity': '1',
          },
          {
            'top': '20%',
            'left': '3%',
            'border': '2px solid rgba(255, 255, 255, 0.05)',
            'height': '359.808px',
            'width': '359.808px',
            'animation-duration': '13s',
            'opacity': '1;',
          },
          {
            'top': '35%',
            'left': '40%',
            'border': '2px solid rgba(255, 255, 255, 0.05)',
            'height': '359.808px',
            'width': '359.808px',
            'animation-duration': '12s',
            'opacity': '1',
          },
          {
            'top': '-10%',
            'right': '6%',
            'height': '359.808px',
            'width': '359.808px',
            'background': 'rgba(255, 255, 255, 0.05)',
            'border': 'none',
            'animation-duration': '12s',
            'opacity': '1',
          }, {
            'bottom': '-5%',
            'right': '-2%',
            'height': '359.808px',
            'width': '359.808px',
            'background': 'rgba(255, 255, 255, 0.05)',
            'border': 'none',
            'animation-duration': '15s',
            'opacity': '1',
          },
          {
            'bottom': '8%',
            'right': '10%',
            'border': '2px solid rgba(255, 255, 255, 0.05)',
            'height': '359.808px',
            'width': '359.808px',
            'animation-duration': '13s',
            'opacity': '1',
          },
          {
            'bottom': '-10%',
            'left': '18%',
            'height': '359.808px',
            'width': '359.808px',
            'background': 'rgba(255, 255, 255, 0.05)',
            'border': 'none',
            'animation-duration': '12s',
            'opacity': '1',
          }
        ]} />
      <div bp="12 container" className="hero-content">
        <div bp="grid">
          <div bp="12">
            <h1>Simple, powerful, trustworthy.</h1>
          </div>
          <div bp="12 10@xl">
            <p>Join thousands of people growing their business with Leadrilla - the only platform that gives you full control over your lead flow. <strong>Ready? Select your industry.</strong>
            </p>
          </div>
          <div bp="12 10@lg 8@xl">
            <a bp="margin-bottom margin-right--lg" className="btn btn-white btn-xl" href="/life">Life Insurance</a>
            <a bp="margin-bottom margin-right--lg" className="btn btn-white btn-xl" href="/medicare">Medicare</a>
            <a bp="margin-bottom margin-right" className="btn btn-white btn-xl" href="/solar">Solar</a>
          </div>
          <div bp="12">
            <a className="white-text bold font-size-lg" href="/contact">I'm in a different industry.</a>
          </div>
        </div>
      </div>
    </div>
  )
}