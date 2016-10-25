import React from 'react'
import FeelingStuck from './components/FeelingStuck'
import RevenueMessage from './components/RevenueMessage'
import PaginatedLessonList from './components/PaginatedLessonList'

class InstructorOverview extends React.Component {
  state = {
    currentPage: 1
  }

  fetchLessons(instructor, currentPage = 1) {
    const {requestInstructorLessons} = this.props
    this.setState({currentPage})
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: currentPage,
      size: 10
    })

  }

  componentWillReceiveProps(nextProps) {
    const {instructor} = nextProps
    if (instructor !== this.props.instructor) {
      this.fetchLessons(instructor)
    }
  }

  componentWillMount() {
    const {instructor} = this.props
    if(instructor) {
      this.fetchLessons(instructor)
    }
  }

  render() {
    const {currentPage} = this.state
    const {instructor, instructorLessons} = this.props

    return instructor ? (
      <div >
        <div>
          <h1>Hi, {instructor.first_name}!</h1>
        </div>
        <RevenueMessage instructor={instructor}/>

        <FeelingStuck />
        <PaginatedLessonList
          lessons={instructorLessons.lessons}
          fetchLessons={this.fetchLessons.bind(this)}
          instructor={instructor}
          total={instructorLessons.total}
          currentPage={currentPage}
        />

      </div>
    ) : null
  }
}

InstructorOverview.propTypes = {
  instructor: React.PropTypes.object.isRequired
}

export default InstructorOverview
