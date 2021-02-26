import React, { useEffect } from 'react'
import classnames from 'classnames'

function FloatingShapes(props) {
  useEffect(() => {
    props.shapes.forEach((shape, i) => {
      let s = document.getElementById('circle-' + i)
      Object.keys(shape).forEach(attribute => {
        s.style.setProperty(attribute, shape[attribute])
      })
      s.style.setProperty(
        '-webkit-animation-duration',
        Math.floor(Math.random() * (18 - 9 + 1) + 9) + 's'
      )
      s.style.setProperty('opacity', '1')
    })
  }, [])

  return (
    <div className={classnames(['FloatingShapes'])}>
      <div className={classnames({ 'skew-container': props.skew })}>
        {props.shapes && props.shapes.length > 0
          ? props.shapes.map((shape, i) => {
              return (
                <div
                  className={classnames([
                    props.shape || 'circle',
                    {
                      float: !props.preventFloat,
                      'reverse-float': shape.reverseSlide
                    }
                  ])}
                  id={`circle-${i}`}
                  key={i}
                />
              )
            })
          : ''}
      </div>
    </div>
  )
}

export default FloatingShapes
