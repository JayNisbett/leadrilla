const initialState =
  JSON.parse(localStorage.getItem('store') ?? '{}')?.auth ?? {}

const auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case 'SET_AUTH':
      return payload
    case 'UPDATE_AUTH':
      return { ...state, ...payload }
    case 'UPDATE_AUTH_COLSURE':
      return payload(state)
    default:
      return state
  }
}

export default auth
