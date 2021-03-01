/* eslint no-undef: 0 */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserProperties, resetIdentity } from '../../helpers/heap_analytics'
import backend from '../../backend'
import { OK } from '../../constants/error_codes'

import store from '../../store';

export const UserContext = React.createContext(null)

export default function AuthProvider(props) {
  const [user, setUserInState] = useState()

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

    // if (process.env.REACT_APP_ENABLE_FACEBOOK === 'true') {
    //   FB.getLoginStatus(async ({ status }) => {
    //     if (status === 'connected') {
    //       await FB.logout()
    //     }

    //     setUserInState(null)
    //   })
    // } else {
    //   setUserInState(null)
    // }
  }

  const fetchMe = () => {
    backend.get('/users/me').then(({ status, body: u }) => {
      if (status === OK) {
        setUser(u)
      } else {
        removeUser()
      }
    })
  }

  const fbAsyncInit = async () => {
    // FB.init({
    //   appId: process.env.REACT_APP_FACEBOOK_APP_ID,
    //   cookie: true,
    //   xfbml: false,
    //   version: 'v3.2'
    // })

    if (localStorage.getItem('token')) {
      fetchMe()
    } else {
      // FB.getLoginStatus(async ({ status, authResponse }) => {
      //   if (status === 'connected') {
      //     const {
      //       status,
      //       body: { jwt, user: u }
      //     } = await backend.post('/users/login/facebook', {
      //       facebook_user_id: authResponse.userID,
      //       access_token: authResponse.accessToken
      //     })

      //     if (status === OK) {
      //       setUser(u, jwt)
      //     } else {
      //       removeUser()
      //     }
      //   } else {
      //     removeUser()
      //   }
      // })
    }
  }

  useEffect(() => {
    if (process.env.REACT_APP_ENABLE_FACEBOOK === 'true') {
      // window.fbAsyncInit = fbAsyncInit

      // // Initialize Facebook
      // let js,
      //   fjs = document.getElementsByTagName('script')[0]
      // if (document.getElementById('facebook-jssdk')) {
      //   return
      // }
      // js = document.createElement('script')
      // js.id = 'facebook-jssdk'
      // js.src = 'https://connect.facebook.net/en_US/sdk.js'
      // fjs.parentNode.insertBefore(js, fjs)
    } else {
      if (localStorage.getItem('token')) {
        fetchMe()
      } else {
        setUserInState(null)
      }
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


