import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {requestInstructorLessons} from '../state/actions'

export default connect(
  null,
  {requestInstructorLessons}
)(class InstructorLessons extends Component {
  
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    size: 20,
  }

  state = {
    currentPage: 1
  }

  fetchLessons = (currentPage = 1) => {
    const {
      requestInstructorLessons,
      instructor,
      size,
      states,
    } = this.props
    this.setState({currentPage})
    requestInstructorLessons({
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
    const {children, size} = this.props
    return children(currentPage, this.fetchLessons, size)
  }
})
