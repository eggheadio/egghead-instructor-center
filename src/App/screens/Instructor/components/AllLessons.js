import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {requestAllLessons} from '../state/actions'

export default connect(
  null,
  {requestAllLessons}
)(class AllLessons extends Component {
  
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    size: 20,
    states: undefined,
  }

  state = {
    currentPage: 1
  }

  fetchLessons = (currentPage = 1) => {
    const {
      requestAllLessons,
      size,
      states,
    } = this.props
    this.setState({currentPage})
    requestAllLessons({
      page: currentPage,
      size,
      states,
    })
  }

  componentWillMount() {
    this.fetchLessons()
  }

  render() {
    const {currentPage} = this.state
    const {children, size} = this.props
    return children(currentPage, this.fetchLessons, size)
  }
})
