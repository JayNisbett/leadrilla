import React, { useRef } from 'react'
import classnames from 'classnames'

import { useOnClickOutside } from '../../hooks/on_click_outside'

function Modal(props) {
  const ref = useRef()

  useOnClickOutside(ref, () => {
    if (props.closeOnClickOutside) {
      props.close()
    }
  })

  return (
    <div
      bp={classnames(['grid', 'vertical-center'], { hide: !props.show })}
      className="modal-wrapper"
    >
      <div
        ref={ref}
        bp="12 8@md offset-3@md 6@lg offset-4@lg"
        className={classnames(['modal-container'], { 'modal-windowless': props.windowless })}
      >
        <div bp="grid gap-row-none">
          <div bp="12">
            <div className="modal-header" bp="padding">
              <h2>{props.title}</h2>
              {props.noClose ? null : (
                <span className="close" onClick={props.close}>
                  &#10005;
                </span>
              )}
            </div>
            <div
              className={classnames('modal-content', { 'overflow-visible': props.overflowVisible })}
              style={props.contentStyle}
            >
              <div bp="padding">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
