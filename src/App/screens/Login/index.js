import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startFetchUser} from '../../state/actions'

export default connect(
  null,
  {startFetchUser}
)(class Login extends Component {

  state = {
    email: 'some email',
    password: 'somepassword',
  }

  submit = () => {
    const {email, password} = this.state
    const {startFetchUser} = this.props
    startFetchUser({email, password})
  }

  render() {
    this.submit()
    return (
      <div>
        Login
      </div>
    )
  }
})
