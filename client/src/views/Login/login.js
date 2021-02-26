import React from 'react'

export default function Login() {
  return (
    <div>
      <div class="Login half-min-height">
        <div class="WebsitePageContent">
          <div class="page-header">
            <div bp="grid text-center" class="system-padding">
              <div bp="12">
                <div bp="grid">
                  <div bp="12">
                    <h2 bp="margin-bottom--sm" class="page-subheading">LOG IN</h2>
                    <h1 class="lr-jumbo-txt page-heading">Welcome back!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-content">
            <div bp="grid container" class="system-padding login-content">
              <div bp="12 8@sm offset-3@sm 6@md offset-4@md 4@lg offset-5@lg margin-top--lg" class="card login-card">
                <form>
                  <p class="hide"></p>
                  <div bp="margin-bottom">
                    <p class="error-message"></p>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class=""
                      value=""
                    />
                  </div>
                  <div bp="margin-bottom">
                    <p class="error-message"></p>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class=""
                      value=""
                    />
                  </div>
                  <button type="submit" bp="margin-bottom" class="btn btn-lg btn-block btn-blue">Login</button>
                </form>
                <a class="small" href="/forgot-password">Forgot Password?</a>
                <a bp="float-right" class="small" href="/signup">Sign Up</a>
              </div>
              <div bp="12 text-center">
                <button class="btn-link small">Sign in with Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}