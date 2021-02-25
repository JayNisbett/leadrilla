import React, { useReducer, useState } from 'react'
import classnames from 'classnames'

export const NotificationContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'hide':
      return {
        className: ['hide', state.className]
      }
    case 'error':
      return {
        className: 'error',
        message: action.message || (
          <>
            Oops, something went wrong! Don't worry - this one's on us. If the problem persists,
            please email us at <a href="mailto:hello@leadrilla.com">hello@leadrilla.com</a>.
          </>
        )
      }
    default:
      return {
        className: action.type,
        message: action.message
      }
  }
}

function NotificationBar(props) {
  const [state, dispatch] = useReducer(reducer, { className: 'hide' })
  const [timeoutId, setTimeoutId] = useState()

  const sendNotification = action => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    if (action.type !== 'hide') {
      setTimeoutId(setTimeout(() => dispatch({ type: 'hide' }), 7000))
    }

    dispatch(action)
  }

  return (
    <>
      <div className={classnames('lr-notification-bar', state.className)} bp="12">
        <div className="lr-notification-close" onClick={() => dispatch({ type: 'hide' })}>
          X
        </div>
        <p>{state.message}</p>
      </div>

      <NotificationContext.Provider value={sendNotification}>
        {props.children}
      </NotificationContext.Provider>
    </>
  )
}

export default NotificationBar
