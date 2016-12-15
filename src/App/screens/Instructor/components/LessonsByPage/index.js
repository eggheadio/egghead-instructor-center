import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {startFetchInstructorLessons, startFetchAllLessons} from '../../state/actions'

export default connect(
  null,
  {startFetchInstructorLessons, startFetchAllLessons}
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
      startFetchInstructorLessons,
      startFetchAllLessons,
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
      ? startFetchInstructorLessons({
          ...sharedOptions,
          lessons_url: instructor.lessons_url,
        })
      : startFetchAllLessons(sharedOptions)
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
