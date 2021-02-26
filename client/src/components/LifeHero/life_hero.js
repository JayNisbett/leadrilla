import React from 'react'
import FloatingShapes from 'components/FloatingShapes/floating_shapes';
import bg from 'assets/img/life-bg.webp';

export default function LifeHero() {
  return (

    <div bp="grid vertical-center" id="lr-hero" className="lr-hero">
      <div bp="12" className="split-hero">
        <div bp="grid" className="split-hero-container">
          <div bp="12 7@lg grid gap-none vertical-center" className="split-hero-content">
            <div bp="12" className="floating-shape-container">
              <FloatingShapes
                shapes={[
                  {
                    'top': '10%',
                    'left': '-3%',
                    'border': '1px solid rgba(84, 105, 197, 0.1)',
                    'animation-duration': '11s',
                    'opacity': '1',
                  },
                  {
                    'top': '20%',
                    'left': '-3%',
                    'border': '1px solid rgba(84, 105, 197, 0.1)',
                    'animation-duration': '11s',
                    'opacity': '1',
                  },
                  {
                    'top': '20%',
                    'left': '10%',
                    'background': 'rgba(84, 105, 197, 0.1)',
                    'border': 'none',
                    'animation-duration': '17s',
                    'opacity': '1',
                  },
                  {
                    'top': '-10%',
                    'right': '-7%',
                    'height': '300px',
                    'width': '300px',
                    'border': '1px solid rgba(84, 105, 197, 0.1)',
                    'animation-duration': '17s',
                    'opacity': '1',
                  },
                  {

                    'bottom': '2%',
                    'right': '15%',
                    'height': '300px',
                    'width': '300px',
                    'background': 'rgba(84, 105, 197, 0.1)',
                    'border': 'none',
                    'animation-duration': '10s',
                    'opacity': '1',
                  },
                  {

                    'bottom': '15%',
                    'right': '-5%',
                    'height': '300px',
                    'width': '300px',
                    'border': '1px solid rgba(84, 105, 197, 0.1)',
                    'animation-duration': '11s',
                    'opacity': '1',
                  },
                  {

                    'top': '50%',
                    'left': '0%',
                    'border': '1px solid rgba(84, 105, 197, 0.1)',
                    'animation-duration': '11s',
                    'opacity': '1',
                  },
                ]} />
            </div>
            <div bp="12" className="system-padding">
              <h1>The new standard for
                <br />
                insurance agents.
              </h1>
              <a bp="margin-top" className="btn btn-xl btn-primary" href="/signup">Get started</a>
            </div>
          </div>
          <div bp="12 5@lg grid gap-none vertical-center" className="split-hero-image gutter-padding" style={{ background: `url("${bg}")` }}>
            <div bp="12 show hide@lg" className="system-padding">
              <h1 className="white-text">The new standard for
                <br />insurance agents.
              </h1>
              <a bp="margin-top" className="btn btn-xl btn-white" href="/signup">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}