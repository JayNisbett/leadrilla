const userProperties = [
  'id',
  'name',
  'email',
  'is_admin',
  'phone',
  'city',
  'state',
  'postal_code',
  'created_at'
]
const prefix = 'Leadrilla Properties - '

const identifyUser = email => {
  window.heap.identify(email, 'email')
}

export const resetIdentity = () => {
  window.heap.resetIdentity()
}

export const setUserProperties = user => {
  let properties = {}
  userProperties.forEach(prop => {
    if (user[prop]) {
      properties[prefix + prop] = user[prop]
    }
  })

  if (user.impersonator && user.impersonator.email) {
    identifyUser(user.impersonator.email)
    properties.impersonation = true
  } else if (user.email) {
    identifyUser(user.email)
  }

  window.heap.addUserProperties(properties)
}

export const track = (event, user) => {
  if (!user.is_admin && !user.pretending && !(user.impersonator && user.impersonator.id)) {
    window.heap.track(event)
  }
}
