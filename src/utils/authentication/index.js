import jwt from 'jwt-simple'
import removeQueryString from './utils/removeQueryString'
import getUrlParameter from './utils/getUrlParameter'

const decodeUserUrl = (token) => jwt.decode(token, null, true).user_url

export const login = (addTokenData) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    return decodeUserUrl(token)
  }
  if (getUrlParameter('jwt')) {
    const token = getUrlParameter('jwt')
    localStorage.setItem('token', token)
    removeQueryString()
    return decodeUserUrl(token)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}
