import React, { useState } from 'react'
import { FacebookProvider, Group } from 'react-facebook'

import Modal from '../Modal/modal'
import backend from '../../backend'

function JoinFacebookGroup() {
  const [showBanner, setShowBanner] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const dismissAlert = () => {
    setShowModal(false)
    setShowBanner(false)
    backend.put('/users/me/metadata', { dismissed_fb_group_banner: true })
  }

  if (!showBanner) {
    return null
  }

  return (
    <div bp="flex padding text-center" className="announcement-banner">
      <div bp="fill">
        <span>
          <span className="announcement-pill lr-md-text bold">
            <div bp="flex">
              <div bp="fill" className="announcement-link" onClick={() => setShowModal(true)}>
                Join the Leadrilla Community on Facebook!
              </div>
              <div bp="fit margin-left--sm" className="grey-text" onClick={dismissAlert}>
                &#10005;
              </div>
            </div>
          </span>

          <Modal
            show={showModal}
            close={() => setShowModal(false)}
            overflowVisible
            windowless
            closeOnClickOutside
          >
            <FacebookProvider appId="731970987171836">
              <Group
                href="https://www.facebook.com/groups/leadrilla"
                width="300"
                showSocialContext
                showMetaData
                skin="light"
              />
            </FacebookProvider>
          </Modal>
        </span>
      </div>
    </div>
  )
}

export default JoinFacebookGroup
