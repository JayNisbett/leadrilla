import React, { useState } from 'react';
import validator from 'validator';
import { toastr } from 'react-redux-toastr'
import axios from "axios"

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({})
  const [errors, setError] = useState({})
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    setSignUpData(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!signUpData?.firstName) {
      setError(prev => ({ ...prev, firstNameError: 'This field is required' }));
      return false;
    } else { setError(prev => ({ ...prev, firstNameError: '' })); }

    if (!signUpData?.lastName) {
      setError(prev => ({ ...prev, lastNameError: 'This field is required' }));
      return false;
    } else { setError(prev => ({ ...prev, lastNameError: '' })); }

    if (!signUpData?.phone) {
      setError(prev => ({ ...prev, phoneError: 'Please check your phone number' }));
      return false;
    } else if (!validator.isMobilePhone(signUpData?.phone)) {
      setError(prev => ({ ...prev, phoneError: 'Please check your phone number' }));
      return false;
    } else { setError(prev => ({ ...prev, phoneError: '' })); }


    if (!validator.isEmail(signUpData?.email)) {
      setError(prev => ({ ...prev, emailError: 'Please check your email address' }));
      return false;
    } else { setError(prev => ({ ...prev, emailError: '' })); }

    if (!signUpData?.password || !signUpData?.confirmPassword) {
      setError(prev => ({ ...prev, passwordError: 'Please check your password' }));
      return false;
    } else if (signUpData?.password !== signUpData?.confirmPassword) {
      setError(prev => ({ ...prev, confirmPasswordError: 'Please check again your password' }));
      return false;
    } else {
      setError(prev => ({ ...prev, confirmPasswordError: '' }));
    }
    if (!agree) {
      return false;
    }

    axios.post("http://localhost:5000/api/users/signup", signUpData).then(res => {
      console.log(res.data, "res")
    })
  }

  return (
    <div className="Signup">
      <div className="WebsitePageContent">
        <div className="page-header">
          <div bp="grid text-center" className="system-padding">
            <div bp="12">
              <div bp="grid">
                <div bp="12">
                  <h2 bp="margin-bottom--sm" className="page-subheading">GET STARTED</h2>
                  <h1 className="lr-jumbo-txt page-heading">1. Set up your account</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div bp="container grid" className="lr-section gutter-padding">
            <div bp="12 8@lg offset-3@lg">
              <p className="text-left">It only takes a couple minutes to set up your account. Enter your email and choose a password here. In the next step, you’ll begin setting up account preferences so you can receive leads.</p>
            </div>
            <div bp="12 8@lg offset-3@lg" className="card rounded-card">
              <div className="Registration">
                <div bp="grid">
                  <form bp="12" className="email-signup" onSubmit={handleSubmit}>
                    <div bp="flex">
                      <div bp="fill padding-right">
                        <div bp="margin-bottom">
                          <p className="error-message">{errors?.firstNameError}</p>
                          <label>First name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={signUpData?.firstName ?? ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div bp="fill">
                        <div bp="margin-bottom">
                          <p className="error-message">{errors?.lastNameError}</p>
                          <label>Last name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={signUpData?.lastName ?? ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div bp="margin-bottom">
                      <p className="error-message">{errors?.phoneError}</p>
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={signUpData?.phone ?? ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div bp="margin-bottom">
                      <p className="error-message">{errors?.emailError}</p>
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={signUpData?.email ?? ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div bp="margin-bottom">
                      <p className="error-message">{errors?.passwordError}</p>
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={signUpData?.password ?? ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div bp="margin-bottom">
                      <p className="error-message">{errors?.confirmPasswordError}</p>
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={signUpData?.confirmPassword ?? ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div bp="flex" className="consent-container">
                      <div bp="fit">
                        <div className="checkbox-container">
                          <input type="radio" id="privacyPolicyAgreement" checked={agree} onChange={() => setAgree(true)} /><label>&nbsp;</label>
                        </div>
                      </div>
                      <div bp="fill margin-right">
                        <label htmlFor="privacyPolicyAgreement" className="consent-text">By signing up, I agree to Leadrilla's
                          <a className="small blue-text" target="_blank" href="/terms-and-conditions">Terms and Conditions</a> and
                          <a className="small blue-text" target="_blank" href="/privacy-policy">Privacy Policy</a>. I expressly consent by electronic signature to receive marketing communication, including via calls using an automatic telephone dialing system and artificial or pre-recorded messages, emails, and text messages (SMS), from Leadrilla and its representatives, affiliates and partners to the phone number provided. I understand that my consent to receive communications in this manner can be revoked at any time.
                        </label>
                      </div>
                      <div bp="fit">
                        <button className="btn btn-lg btn-blue" bp="float-right">Next</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}