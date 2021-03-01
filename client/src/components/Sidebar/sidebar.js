import react from "react";
import React from react;

export default function Sidebar() {
  return (
    <div class="side-bar" bp="fit padding">
      <div>
        <div bp="grid">
          <div bp="12 text-center">
            <a href="/">
              <span class="isvg loaded logo">
              </span>
            </a>
          </div>
        </div>
        <div bp="margin-top--lg">
          <a class="nav-link nav-link-active" href="/dash/onboarding">Get Started</a>
          <a class="nav-link" aria-current="page" href="/dash/lead-feeds">Lead Feeds</a>
          <a class="nav-link" href="/dash/marketplace">Marketplace</a>
          <a class="nav-link" href="/dash/leads">My Leads</a>
          <a class="nav-link" href="/dash/billing">Billing</a>
          <a class="nav-link" href="/dash/settings">Settings</a>
          <a class="nav-link" href="/dash/faq">FAQ</a>
        </div>
        <div class="nav-bottom dark-grey-text">
          {/* <p bp="margin-bottom--lg" class="font-size-sm">Have a question? Email us at
            <a class="bold" href="mailto:hello@leadrilla.com?subject=Leadrilla Support Request">hello@leadrilla.com</a>
          </p> */}
          <button id="logout-btn" class="nav-link white-text">Sign out</button>
        </div>
      </div>
    </div>
  )
}