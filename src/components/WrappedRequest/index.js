import React, {Component} from 'react'
import {startsWith, includes} from 'lodash'
import {Request} from 'egghead-ui'
import {logout} from 'utils/authentication'

export default class WrappedRequest extends Component {

  getUrlWithBase = () => `${process.env.REACT_APP_EGGHEAD_BASE_URL}${this.props.url}`

  getHeaders = () => ({
    ...this.props.headers,
    Authorization: localStorage.token
      ? `Bearer ${localStorage.token}`
      : null,
    'Content-Type': 'application/json',
  })

  handleError = (error) => {
    if (includes([401, 403], error.response.status)) {
      logout()
    }
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    const {url, children, ...rest} = this.props
    return (
      <Request
        {...rest}
        url={startsWith(url, '/') ? this.getUrlWithBase() : url}
        headers={this.getHeaders()}
        onError={this.handleError}
      >
        {({request, running, error, data, response}) => {
          return children({
            request,
            running,
            error,
            data,
            response,
          })
        }}
      </Request>
    )
  }
}
