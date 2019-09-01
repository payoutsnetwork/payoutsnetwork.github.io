const helpers = {}

helpers.capitalize = (s) => {
  if (typeof s !== 'string') return 'that was not a string...'
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default helpers
