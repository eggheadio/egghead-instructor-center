import { Component, PropTypes } from 'react'
import axios from 'axios'
import {isEqual, first} from 'lodash'

const http = axios.create()

const requestMethods = [
  'get',
  'post',
  'put',
  'delete',
]

export default class RequestBase extends Component {

  static propTypes = {
    method: PropTypes.oneOf(requestMethods),
    url: PropTypes.string.isRequired,
    params: PropTypes.object,
    headers: PropTypes.object,
    body: PropTypes.object,
    lazy: PropTypes.bool,
    onResponse: PropTypes.func,
    onData: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.func,
  }

  static defaultProps = {
    method: first(requestMethods),
  }

  state = {
    running: !this.props.lazy,
    response: null,
    data: null,
    error: null,
  }

  componentDidMount() {
    if (!this.props.lazy) {
      this.request()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.lazy && !isEqual(this.props, nextProps)) {
      this.request()
    }
  }

  componentWillUnmount() {
    this.willUnmount = true
  }

  request = (body = this.props.body) => {
    this.setState({request: true}, () => {
      http.request({
        method: this.props.method,
        url: this.props.url,
        params: this.props.params,
        headers: this.props.headers,
        data: body,
      }).then(response => {
        if (this.willUnmount) {
          return
        }
        this.setState({
          running: false,
          response,
          data: response.data,
          error: null,
        }, () => {
          if (this.props.onResponse) {
            this.props.onResponse(null, this.state.response)
          }
          if (this.props.onData) {
            this.props.onData(this.state.data)
          }
        })
      }).catch(error => {
        if (this.willUnmount) {
          return
        }
        this.setState({
          running: false,
          response: error,
          error,
        }, () => {
          if (this.props.onResponse) {
            this.props.onResponse(this.state.response)
          }
          if (this.props.onError) {
            this.props.onError(this.state.error)
          }
        })
      })
    })
  }

  render() {
    if (!this.props.children) {
      return null
    }
    return this.props.children({
      request: this.request,
      running: this.state.running,
      error: this.state.error,
      data: this.state.data,
      response: this.state.response,
    }) || null
  }
}
