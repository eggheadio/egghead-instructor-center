import React, {Component, PropTypes} from 'react'
import {loginExpiredDescriptionText} from 'utils/text'
import notify from 'utils/notify'
import logout from 'utils/logout'
import FetchBase from './components/FetchBase'

const statusCodes = {
  unauthorized: 401,
}

export default class Fetch extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  getUrl = () => `${process.env.REACT_APP_EGGHEAD_BASE_URL}${this.props.path}`

  getHeaders = () => ({
    ...this.props.headers,
    Authorization: localStorage.token
      ? `Bearer ${localStorage.token}`
      : null,
    'Content-Type': 'application/json',
  })

  handleError = (error) => {
    if (error.status === statusCodes.unauthorized) {
      notify(loginExpiredDescriptionText)
      logout()
    }
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    return (
      <FetchBase
        {...this.props}
        url={this.getUrl()}
        headers={this.getHeaders()}
        onError={this.handleError}
      />
    )
  }
}
