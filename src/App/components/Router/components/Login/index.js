import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startFetchUser} from '../../../../state/actions'
import Main from '../../../../components/Main'

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {startFetchUser}
)(class Login extends Component {

  state = {
    email: 'email',
    password: 'password',
  }

  submit = () => {
    const {email, password} = this.state
    const {startFetchUser} = this.props
    startFetchUser({email, password})
  }

  render() {
    return (
      <Main>
        <div onClick={this.submit}>Login Submit</div>
      </Main>
    )
  }
})
