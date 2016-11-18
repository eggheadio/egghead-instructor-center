import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {requestInstructorLessons, requestAllLessons} from '../state/actions'

export default connect(
  null,
  {requestInstructorLessons, requestAllLessons}
)(class LessonsByPage extends Component {
  
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
      requestAllLessons,
      instructor,
      size,
      states,
    } = this.props
    this.setState({currentPage})
    const options = {
      page: currentPage,
      size,
      states,
    }
    instructor
      ? requestInstructorLessons({
          ...options,
          lessons_url: instructor.lessons_url,
        })
      : requestAllLessons(options)
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
