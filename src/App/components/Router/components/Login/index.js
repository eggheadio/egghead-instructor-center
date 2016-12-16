import React, {Component} from 'react'
import {connect} from 'react-redux'
import {every, size} from 'lodash'
import {startFetchUser, addNotification} from '../../../../state/actions'
import Main from '../../../../components/Main'
import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'

const inputClassNames = 'input-reset pa2 br2 ba b--black-20 w-100'

const clearedState = {
  email: '',
  password: '',
  hasError: false,
}

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {startFetchUser, addNotification}
)(class Login extends Component {

  state = clearedState

  clear = () => {
    this.setState(clearedState)
  }

  submit = () => {
    const {email, password} = this.state
    const {startFetchUser} = this.props
    startFetchUser({email, password})
    this.clear()
  }

  handleSubmitAttempt = () => {
    const {email, password} = this.state
    const {addNotification} = this.props
    if(every([email, password], (input) => size(input) > 0)) {
      this.submit()
    }
    else {
      addNotification({
        type: 'error',
        message: 'Missing required form input',
      })
      this.setState({hasError: true})
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const {email, password, hasError} = this.state
    return (
      <Main>

        <Heading level='2'>
          Login
        </Heading>

        <div className='mb3'>
          You need to log in to view this.
        </div>

        <div className='mb2'>
          <input
            type='text'
            placeholder='Email *'
            value={email}
            onChange={this.handleEmailChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          />
        </div>

        <div className='mb2'>
          <input
            type='password'
            placeholder='Password *'
            value={password}
            onChange={this.handlePasswordChange}
            className={`${inputClassNames}${hasError ? ' b--red' : ''}`}
          />
        </div>

        <Button onClick={this.handleSubmitAttempt}>
          Submit
        </Button>

      </Main>
    )
  }
})
