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

  state = {
    currentPage: 1
  }

  fetchLessons = (currentPage = 1) => {
    const {
      requestAllLessons,
      instructor,
      size = 10,
      states = undefined,
    } = this.props
    this.setState({currentPage})
    requestAllLessons({
      lessons_url: instructor.lessons_url,
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
    const {children} = this.props
    return children(currentPage, this.fetchLessons)
  }
})
