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
    pageSize: 10,
  }

  state = {
    currentPage: 1
  }

  fetchLessons = (currentPage = 1) => {
    const {
      requestInstructorLessons,
      requestAllLessons,
      instructor,
      pageSize,
      states,
    } = this.props
    this.setState({currentPage})
    const sharedOptions = {
      page: currentPage,
      pageSize,
      states,
    }
    instructor
      ? requestInstructorLessons({
          ...sharedOptions,
          lessons_url: instructor.lessons_url,
        })
      : requestAllLessons(sharedOptions)
  }

  componentWillMount() {
    this.fetchLessons()
  }

  render() {
    const {currentPage} = this.state
    const {children, pageSize} = this.props
    return children({
      currentPage,
      pageSize,
      fetchLessons: this.fetchLessons,
    })
  }
})
