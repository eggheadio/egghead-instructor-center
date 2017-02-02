import jwt from 'jwt-simple'
import getUrlParameter from 'utils/getUrlParameter'
import removeQueryString from 'utils/removeQueryString'

const decodeToken = (token) => jwt.decode(token, null, true).meta

export const login = (addUser) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    addUser(decodeToken(token))
  }
  if (getUrlParameter('jwt')) {
    const token = getUrlParameter('jwt')
    localStorage.setItem('token', token)
    removeQueryString()
    addUser(decodeToken(token))
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}
