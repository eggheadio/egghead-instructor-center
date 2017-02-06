import React, {Component} from 'react'
import {startsWith} from 'lodash'
import {logout} from 'utils/authentication'
import {default as RequestBase} from './components/Request'

const statusCodes = {
  unauthorized: 401,
}

export default class Request extends Component {

  getUrlWithBase = () => `${process.env.REACT_APP_EGGHEAD_BASE_URL}${this.props.url}`

  getHeaders = () => ({
    ...this.props.headers,
    Authorization: localStorage.token
      ? `Bearer ${localStorage.token}`
      : null,
    'Content-Type': 'application/json',
  })

  handleError = (error) => {
    if (error.status === statusCodes.unauthorized) {
      logout()
    }
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    const {url, children, ...rest} = this.props
    return (
      <RequestBase
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
      </RequestBase>
    )
  }
}
