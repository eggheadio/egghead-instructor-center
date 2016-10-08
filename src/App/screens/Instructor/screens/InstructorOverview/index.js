import React from 'react'

import FeelingStuck from './components/FeelingStuck'
import RevenueMessage from './components/RevenueMessage'
import PaginatedLessonList from './components/PaginatedLessonList'

import {fetchInstructorLessons} from '../../services/instructor-service'

class InstructorOverview extends React.Component {
  state = {
    lessons: [],
    currentPage: 1
  }

  fetchLessons(instructor, currentPage = 1) {
    this.setState({currentPage});
    fetchInstructorLessons(instructor, currentPage).then(({lessons, pages, total}) => this.setState({
      lessons,
      pages,
      total
    }))
  }

  componentWillReceiveProps(nextProps) {
    const {instructor} = nextProps
    if (instructor) {
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
    const {lessons, total, currentPage} = this.state
    const {instructor} = this.props


    return instructor ? (
      <div >
        <div>
          <h1>Hi, {instructor.first_name}!</h1>
        </div>
        <RevenueMessage instructor={instructor}/>

        <FeelingStuck />
        <PaginatedLessonList
          lessons={lessons}
          fetchLessons={this.fetchLessons.bind(this)}
          instructor={instructor}
          total={total}
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