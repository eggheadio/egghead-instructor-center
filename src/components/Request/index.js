import React, {Component, PropTypes} from 'react'
import {startsWith} from 'lodash'
import {logout} from 'utils/authentication'
import Loading from 'components/Loading'
import Error from 'components/Error'
import RequestBase from './components/RequestBase'

const statusCodes = {
  unauthorized: 401,
}

export default class Request extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
  }

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
          if (running) {
            return <Loading />
          }
          if (error) {
            return (
              <Error>
                Error: {error.message}
              </Error>
            )
          }
          return children({
            request,
            data,
            response,
          })
        }}
      </RequestBase>
    )
  }
}
