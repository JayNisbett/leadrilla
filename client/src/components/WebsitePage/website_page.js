import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

import ScrollToTop from '../ScrollToTop/scroll_to_top'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

function WebsitePage(props) {
  const [theme, setTheme] = useState('life-theme')
  const rootHtmlEle = document.getElementsByTagName('html')[0]

  useEffect(() => {

    const rootHasTheme = theme => {
      return rootHtmlEle.className.indexOf(theme) > -1
    }

    const setRootTheme = theme => {
      if (!rootHasTheme(theme)) {
        rootHtmlEle.className = theme
      }
    }

    if (props.location.pathname.indexOf('solar') > -1) {
      setTheme('solar-theme')
      localStorage.setItem('theme', 'solar-theme')
      setRootTheme('solar-theme')
    } else if (props.location.pathname.indexOf('life') > -1 || props.location.pathname === '/') {
      setTheme('life-theme')
      localStorage.setItem('theme', 'life-theme')
      setRootTheme('life-theme')
    } else if (
      props.location.pathname.indexOf('medicare') > -1 ||
      props.location.pathname === '/'
    ) {
      setTheme('medicare-theme')
      localStorage.setItem('theme', 'medicare-theme')
      setRootTheme('medicare-theme')
    } else {
      setTheme(localStorage.getItem('theme') || 'life-theme')
      setRootTheme(localStorage.getItem('theme') || 'life-theme')
    }
  }, [props.location.pathname, rootHtmlEle.className])



  return (
    <ScrollToTop>
      <div className={classnames(['WebsitePage', theme])}>
        <Navbar {...props} />

        {props.children}
        <Footer />
      </div>
    </ScrollToTop>
  )
}

export default WebsitePage
