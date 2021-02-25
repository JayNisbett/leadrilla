import React from 'react';

export default function NumbersSay() {
  return (
    <div class="lr-section">
      <div bp="grid">
        <div bp="12 container">
          <div class="WebsitePlatformStats">
            <div class="platform-content-container">
              <h1>The numbers <br bp="hide show@lg" />say it all.</h1>
              <a bp="margin-top" class="btn btn-white btn-xl" href="/signup"> Get started</a>
              <div class="platform-stats-container" bp="hide show@lg">
                <div bp="grid vertical-center">
                  <div bp="12">
                    <div bp="flex padding-bottom--lg">
                      <div class="website-stat-item" bp="fill">
                        <h1 class="website-stat-value">10M+</h1>
                        <label>Consumers reached monthly</label>
                      </div><div class="website-stat-item" bp="fill">
                        <h1 class="website-stat-value">10k+</h1>
                        <label>Active ads</label>
                      </div>
                    </div>
                    <div bp="flex padding-top--lg">
                      <div class="website-stat-item" bp="fill">
                        <h1 class="website-stat-value">52.2%</h1>
                        <label>Contact rate</label>
                      </div>
                      <div class="website-stat-item" bp="fill">
                        <h1 class="website-stat-value">11714</h1>
                        <label>Growing businesses</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div bp="grid vertical-center hide@lg">
              <div bp="12 padding-left">
                <div class="platform-stats-container">
                  <div bp="flex padding-bottom--lg">
                    <div class="website-stat-item" bp="fill">
                      <h1 class="website-stat-value">10M+</h1>
                      <label>Consumers reached monthly</label>
                    </div>
                    <div class="website-stat-item" bp="fill"
                    ><h1 class="website-stat-value">10k+</h1>
                      <label>Active ads</label>
                    </div>
                  </div>
                  <div bp="flex padding-top--lg">
                    <div class="website-stat-item" bp="fill">
                      <h1 class="website-stat-value">52.2%</h1>
                      <label>Contact rate</label>
                    </div>
                    <div class="website-stat-item" bp="fill">
                      <h1 class="website-stat-value">11714</h1>
                      <label>Active businesses</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}