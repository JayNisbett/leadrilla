import React from 'react'
import FloatingShapes from 'components/FloatingShapes/floating_shapes'

export default function MedicareHero() {
  return (
    <div bp="grid vertical-center" id="lr-hero" class="lr-hero">
      <div bp="12" class="split-hero">
        <div bp="grid" class="split-hero-container">
          <div bp="12 7@lg 6@xl grid gap-none vertical-center" class="split-hero-content">
            <div bp="12" class="floating-shape-container">
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
                    'top': '10%',
                    'left': '-3%',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                    'animation-duration': '16s',
                    'opacity': '1',
                  },
                  {
                    'top': '20%',
                    'left': '10%',
                    'background': 'rgba(255, 255, 255, 0.04)',
                    'border': 'none',
                    'animation-duration': '16s',
                    'opacity': '1',
                  },
                  {

                    'top': '-10%',
                    'right': '-7%',
                    'height': '300px',
                    'width': '300px',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                    'animation-duration': '16s',
                    'opacity': '1',
                  },
                  {

                    'top': '7%',
                    'right': '4%',
                    'height': '300px',
                    'width': '300px',
                    'background': 'rgba(255, 255, 255, 0.04)',
                    'border': 'none',
                    'animation-duration': '18s',
                    'opacity': '1',
                  },
                  {

                    'bottom': '2%',
                    'right': '15%',
                    'height': '300px',
                    'width': '300px',
                    'background': 'rgba(255, 255, 255, 0.04)',
                    'border': 'none',
                    'animation-duration': '13s',
                    'opacity': '1',
                  },
                  {

                    'bottom': '15%',
                    'right': '-5%',
                    'height': '300px',
                    'width': '300px',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                    'animation-duration': '17s',
                    'opacity': '1',
                  },
                  {

                    'top': '50%',
                    'left': '0%',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                    'animation-duration': '9s',
                    'opacity': '1',
                  }

                ]}
              />
            </div>
            <div bp="12" class="system-padding">
              <h1>Accelerating growth for<br /> medicare agencies.</h1>
              <a bp="margin-top" class="btn btn-xl btn-white" href="/signup">Get started</a>
            </div>
          </div>
          <div bp="12 5@lg 6@xl grid gap-none vertical-center" class="split-hero-image gutter-padding">
            <div bp="12 show hide@lg" class="system-padding">
              <h1>Accelerating growth for <br bp="show@sm hide" /> medicare agencies.</h1>
              <a bp="margin-top" class="btn btn-xl btn-white" href="/signup">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}