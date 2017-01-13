export default (name, body) => process.env.REACT_APP_FAKE_API
  ? body
  : {[name]: body}
