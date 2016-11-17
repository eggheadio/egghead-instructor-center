import {Component, PropTypes} from 'react'

export default class extends Component {
  
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    currentPage: 1
  }

  fetchLessons = (currentPage = 1) => {
    const {
      requestInstructorLessons,
      instructor,
      size = 10,
      states = undefined,
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
    const {children} = this.props
    return children(currentPage, this.fetchLessons)
  }
}
