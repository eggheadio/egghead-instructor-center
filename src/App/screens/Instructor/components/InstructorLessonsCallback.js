import {Component, PropTypes} from 'react'

export default class extends Component {
  
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    currentPage: 1
  }

  fetchLessons() {
    const {
      requestInstructorLessons,
      instructor,
      currentPage = 1,
      size = 10,
    } = this.props
    this.setState({currentPage})
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: currentPage,
      size,
    })
  }

  componentWillMount() {
    this.fetchLessons()
  }

  render() {
    const {currentPage} = this.state
    const {children} = this.props
    return children(currentPage)
  }
}
