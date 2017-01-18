export default (token) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
})
