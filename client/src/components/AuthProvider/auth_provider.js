/* eslint no-undef: 0 */
import React, { useState, useEffect } from 'react'
import { setUserProperties, resetIdentity } from '../../helpers/heap_analytics'
import backend from '../../backend'
import { useSelector } from 'react-redux';
import { OK } from '../../constants/error_codes'

export const UserContext = React.createContext(null)

export default function AuthProvider(props) {

  const userData = useSelector(store => (store?.auth ?? {})) ?? ''

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

  useEffect(() => {
    const fetchMe = () => {
      backend.get('/users/me').then(({ status, body: u }) => {
        if (status === OK) {
          setUser(u)
        } else {
          removeUser()
        }
      })
    }
    if (localStorage.getItem('token')) {
      fetchMe()
    } else {
      setUserInState(null)
    }
  }, [])

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


