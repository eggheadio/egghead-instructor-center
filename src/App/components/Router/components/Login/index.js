import React, {Component} from 'react'
import {connect} from 'react-redux'
import {every, size} from 'lodash'
import {startFetchUser, addNotification} from '../../../../state/actions'
import {guideUrl} from '../../../../utils/urls'
import Main from '../../../../components/Main'
import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'
import Anchor from '../../../../components/Anchor'

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

        <div className='mb3'>
          <Heading level='2'>
            Instructor 101 Guide
          </Heading>

          <div className='mb3'>
            We've put together a guide to help you understand how lessons are created for egghead.io.
          </div>

          <Anchor url={guideUrl}>
            <Button>
              View the guide
            </Button>
          </Anchor>
        </div>

        <div>

          <Heading level='2'>
            Instructor Center
          </Heading>

          <div className='mb3'>
            If you're an existing egghead.io instructor, please log in to access the instructor center.
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
            Log in
          </Button>

        </div>

      </Main>
    )
  }
})
