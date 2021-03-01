import semver from 'semver'

// import { UNAUTHORIZED } from './constants/error_codes'

const backend = async (method, uri, body, { headers } = {}) => {
  headers = {
    Accept: 'application/json',
    ...headers
  }

  const token = localStorage.getItem('token')
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  if (method !== 'get') {
    headers['Content-Type'] = 'application/json'
  }

  let response

  try {
    response = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, {
      method,
      headers,
      body: JSON.stringify(body)
    })
  } catch (err) {
    response = { ok: false }
  }

  let responseBody

  try {
    responseBody = await response.json()
  } catch (err) {
    responseBody = { success: false }
  }

  if (
    !uri.includes('login') &&
    // response.status === UNAUTHORIZED &&
    responseBody.message === 'Account disabled'
  ) {
    alert('Your account has been disabled. You will now be logged out.')
  }

  try {
    if (
      process.env.NODE_ENV === 'production' &&
      semver.lt(process.env.REACT_APP_VERSION, response.headers.get('X-Client-Version'))
    ) {
      window.location.reload(true)
    }
  } catch (e) {
    // Do nothing
  }

  return {
    ok: response.ok,
    status: response.status,
    body: responseBody
  }
}

  ;['get', 'post', 'put', 'delete'].forEach(method => {
    backend[method] = backend.bind(null, method)
  })

export default backend
