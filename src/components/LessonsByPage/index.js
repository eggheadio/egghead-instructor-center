import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {startFetchInstructorLessons, startFetchAllLessons} from 'state/actions'

import Loading from 'components/Loading'

export default connect(
  ({appScreen}) => ({
    lessonPage: appScreen.lessonPage,
  }),
  {startFetchInstructorLessons, startFetchAllLessons}
)(class LessonsByPage extends Component {
  
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    pageSize: 10,
  }

  state = {
    isLoading: false,
    currentPage: 1,
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
    const {lessonPage, children, pageSize} = this.props
    return lessonPage.isLoading
      ? <Loading />
      : children({
          currentPage,
          pageSize,
          fetchLessons: this.fetchLessons,
        })
  }
})
