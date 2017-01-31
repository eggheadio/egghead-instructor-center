export default () => {
  localStorage.removeItem('token')
  window.location.reload()
}
