import React from 'react'
import Split from '../../../../components/Split'
import PaginatedLessonList from './components/PaginatedLessonList'

class PublishedLessons extends React.Component {

  state = {
    currentPage: 1
  }

  fetchLessons(instructor, currentPage = 1) {
    const {requestInstructorLessons} = this.props
    this.setState({currentPage})
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: currentPage,
      size: 10,
    })
  }

  componentWillMount() {
    const {instructor} = this.props
    this.fetchLessons(instructor)
  }

  render() {
    const {currentPage} = this.state
    const {instructor, instructorLessons} = this.props
    return (
      <Split
        title='Published Lessons'
        main={
          <PaginatedLessonList
            lessons={instructorLessons.lessons}
            fetchLessons={this.fetchLessons.bind(this)}
            instructor={instructor}
            total={instructorLessons.total}
            currentPage={currentPage}
          />
        }
        aside={
          <div />
        }
      />
    )
  }
}

PublishedLessons.propTypes = {
  instructor: React.PropTypes.object.isRequired,
}

export default PublishedLessons
