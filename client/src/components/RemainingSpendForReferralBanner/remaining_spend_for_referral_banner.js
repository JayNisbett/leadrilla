import React from 'react'
import { useSelector } from 'react-redux'

function RemainingSpendForReferralBanner() {
  const userData = useSelector(store => (store?.auth ?? {})) ?? ''
  const user = userData?.user

  if (user?.referrer && user?.amount_spent < 20000) {
    return (
      <div bp="12" className="remaining-spend">
        <p bp="margin-bottom">
          You were referred by {user?.referrer}. Once you spend $200, you will earn $25 in lead
          credit.
        </p>

        <div className="progress-bar">
          <div
            className="progress-bar-filled"
            style={{ width: `${(user?.amount_spent / 20000) * 100}%` }}
          />
          <div
            className="progress-bar-circle"
            style={{ left: `calc(${(user?.amount_spent / 20000) * 100}% - 6px)` }}
          />
          <div
            className="progress-bar-amount"
            style={{ left: `calc(${(user?.amount_spent / 20000) * 100}% - 11px)` }}
          >
            ${Math.floor(user?.amount_spent / 100).toFixed(0)}
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default RemainingSpendForReferralBanner
