/* eslint no-undef: 0 */
import React, { useState } from 'react'
import { setUserProperties, resetIdentity } from '../../helpers/heap_analytics'
import { useSelector } from 'react-redux';

export const UserContext = React.createContext(null)

export default function AuthProvider(props) {

  const userData = useSelector(store => (store?.auth ?? {}))?.data ?? ''

  const [user, setUserInState] = useState(userData.user)

  const setUser = (user, token) => {
    if (token) {
      localStorage.setItem('token', token)
    }

    setUserProperties(user)
    setUserInState(user)
  }

  const removeUser = () => {
    localStorage.removeItem('token')
    resetIdentity()
  }


  if (user || user === null) {
    return (
      <UserContext.Provider value={{ user, setUser, removeUser }}>
        {props.children}
        {console.log()}
      </UserContext.Provider>
    )
  } else {
    return <></>
  }
}


