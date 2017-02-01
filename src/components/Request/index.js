import React, {Component, PropTypes} from 'react'
import {startsWith} from 'lodash'
import {loginExpiredDescriptionText} from 'utils/text'
import notify from 'utils/notify'
import logout from 'utils/logout'
import Loading from 'components/Loading'
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
      notify(loginExpiredDescriptionText)
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
        {({request, running, error, data}) => {
          if (running) {
            return <Loading />
          }
          if (error) {
            return (
              <div className='red'>
                Error: {error.message}
              </div>
            )
          }
          return children({
            request,
            data,
          })
        }}
      </RequestBase>
    )
  }
}
