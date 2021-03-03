import React, { useState } from 'react';
import validator from 'validator';
import axios from "axios";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'

export default function SignUp(props) {

  const dispatch = useDispatch();
  const token = useSelector(store => (store?.auth ?? {}))?.data?.token ?? ''

  // If logined, to edirect
  if (token) {
    props.history.push('/')
  }

  const [signUpData, setSignUpData] = useState({})
  const [errors, setError] = useState({})
  const [agree, setAgree] = useState(false);

  const [pageTab, setPageTab] = useState(true);
  const [mapState, setMapState] = useState();
  const [industry, setIndustry] = useState();

  const [pageHeader, setPageHeader] = useState('1. Set up your account');

  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    setSignUpData(state => ({ ...state, [name]: value }))
  }

  const handleState = (mapState) => {
    setMapState(mapState);
  }

  const handleIndustry = (industry) => {
    setIndustry(industry);
  }

  const handlePersonal = (e) => {
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

    setPageHeader('2. Tell us about you');
    setPageTab(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpData["state"] = mapState.value
    signUpData["industry"] = industry.value
    signUpData["is_admin"] = false
    signUpData["onboarded"] = false
    signUpData["type"] = ''
    signUpData["point"] = 0
    signUpData["amount_spent"] = 0

    axios.post("http://216.137.179.178:5000/api/users/signup", signUpData).then(res => {
      if (!Boolean(res.data.error)) {
        axios.post("http://216.137.179.178:5000/api/users/login", {
          email: signUpData.email,
          password: signUpData.password
        }).then(res => {
          dispatch({ type: 'SET_AUTH', payload: res.data })
        })
        props.history.push('/dash/onboarding')
      }
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
                  <h1 className="lr-jumbo-txt page-heading">{pageHeader}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {pageTab && (
          <div className="page-content">
            <div bp="container grid" className="lr-section gutter-padding">
              <div bp="12 8@lg offset-3@lg">
                <p className="text-left">It only takes a couple minutes to set up your account. Enter your email and choose a password here. In the next step, you’ll begin setting up account preferences so you can receive leads.</p>
              </div>
              <div bp="12 8@lg offset-3@lg" className="card rounded-card">
                <div className="Registration">
                  <div bp="grid">
                    <form bp="12" className="email-signup" onSubmit={handlePersonal}>
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
        )}
        {!pageTab && (
          <div className="page-content">
            <div bp="container grid" className="lr-section gutter-padding">
              <div bp="12 8@lg offset-3@lg">
                <p className="text-left">Thanks, shadow dev. Now, to help Leadrilla better serve you, tell us a little about yourself. In the next step you'll be able to see the leads we have available in your area, and set up your first lead feed.</p>
              </div>
              <div bp="12 8@lg offset-3@lg" className="card rounded-card">
                <div className="PersonalInformation">
                  <form onSubmit={handleSubmit}>
                    <div bp="grid gap-row-none">
                      <div bp="12 6@lg margin-bottom">
                        <p className="error-message"></p>
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          value={signUpData?.city ?? ''}
                          onChange={handleChange}
                        />
                      </div>
                      <div bp="12 3@lg margin-bottom">
                        <label>State</label>
                        <Select options={states} onChange={handleState} value={mapState} />
                      </div>
                      <div bp="12 3@lg margin-bottom">
                        <p className="error-message"></p>
                        <label htmlFor="postal_code">Zip</label>
                        <input
                          type="text"
                          name="zip"
                          value={signUpData?.zip ?? ''}
                          onChange={handleChange}
                        />
                      </div>

                      <div bp="12 6@lg margin-bottom">
                        <label>Industry</label>
                        <Select options={industries} onChange={handleIndustry} value={industry} />
                      </div>
                      <div bp="12 6@lg margin-bottom">
                        <p className="error-message"></p>
                        <label>Company</label>
                        <input
                          type="text"
                          name="company"
                          value={signUpData?.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-blue btn-lg" bp="float-right">Next</button>
                  </form>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

//US State List 
const states = [
  { value: 'AK', label: 'AK' },
  { value: 'AL', label: 'AL' },
  { value: 'AZ', label: 'AZ' },
  { value: 'AR', label: 'AR' },
  { value: 'CA', label: 'CA' },
  { value: 'CO', label: 'CO' },
  { value: 'CT', label: 'CT' },
  { value: 'DE', label: 'DE' },
  { value: 'FL', label: 'FL' },
  { value: 'GA', label: 'GA' },
  { value: 'HI', label: 'HI' },
  { value: 'ID', label: 'ID' },
  { value: 'IL', label: 'IL' },
  { value: 'IN', label: 'IN' },
  { value: 'IA', label: 'IA' },
  { value: 'KS', label: 'KS' },
  { value: 'KY', label: 'KY' },
  { value: 'LA', label: 'LA' },
  { value: 'ME', label: 'ME' },
  { value: 'MD', label: 'MD' },
  { value: 'MA', label: 'MA' },
  { value: 'MI', label: 'MI' },
  { value: 'MN', label: 'MN' },
  { value: 'MS', label: 'MS' },
  { value: 'MO', label: 'MO' },
  { value: 'MT', label: 'MT' },
  { value: 'NE', label: 'NE' },
  { value: 'NV', label: 'NV' },
  { value: 'NH', label: 'NH' },
  { value: 'NJ', label: 'NJ' },
  { value: 'NM', label: 'NM' },
  { value: 'NY', label: 'NY' },
  { value: 'NC', label: 'NC' },
  { value: 'ND', label: 'ND' },
  { value: 'OH', label: 'OH' },
  { value: 'OK', label: 'OK' },
  { value: 'OR', label: 'OR' },
  { value: 'PA', label: 'PA' },
  { value: 'RI', label: 'RI' },
  { value: 'SC', label: 'SC' },
  { value: 'SD', label: 'SD' },
  { value: 'TN', label: 'TN' },
  { value: 'TX', label: 'TX' },
  { value: 'UT', label: 'UT' },
  { value: 'VT', label: 'VT' },
  { value: 'VA', label: 'VA' },
  { value: 'WA', label: 'WA' },
  { value: 'WV', label: 'WV' },
  { value: 'WI', label: 'WI' },
  { value: 'WY', label: 'WY' },
]
const industries = [
  { value: 'lifeInsurance', label: 'Life Insurance' },
  { value: 'solar', label: 'Solar' },
  { value: 'medicare', label: 'Medicare' }
]