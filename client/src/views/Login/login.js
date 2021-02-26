import React, { useState } from 'react';
import isEmail from "is-email";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div className="Login half-min-height">
        <div className="WebsitePageContent">
          <div className="page-header">
            <div bp="grid text-center" className="system-padding">
              <div bp="12">
                <div bp="grid">
                  <div bp="12">
                    <h2 bp="margin-bottom--sm" className="page-subheading">LOG IN</h2>
                    <h1 className="lr-jumbo-txt page-heading">Welcome back!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <div bp="grid container" className="system-padding login-content">
              <div bp="12 8@sm offset-3@sm 6@md offset-4@md 4@lg offset-5@lg margin-top--lg" className="card login-card">
                <form>
                  <p className="hide"></p>
                  <div bp="margin-bottom">
                    <p className="error-message"></p>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                    />
                  </div>
                  <div bp="margin-bottom">
                    <p className="error-message"></p>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                    />
                  </div>
                  <button type="submit" bp="margin-bottom" className="btn btn-lg btn-block btn-blue">Login</button>
                </form>
                <a className="small" href="/forgot-password">Forgot Password?</a>
                <a bp="float-right" className="small" href="/signup">Sign Up</a>
              </div>
              <div bp="12 text-center">
                <button className="btn-link small">Sign in with Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}