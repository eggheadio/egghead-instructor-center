import React from 'react'
import Split from '../../../../components/Split'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

class GetPublished extends React.Component {

  fetchLessons(instructor) {
    const {requestInstructorLessons} = this.props
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: 1,
      size: 10
    })
  }

  componentWillMount() {
    const {instructor} = this.props
    if(instructor) {
      this.fetchLessons(instructor)
    }
  }

  render() {
    const {instructor, instructorLessons} = this.props
    return (
      <Split
        title='Get Published'
        main={
          <GetPublishedSteps
            instructor={instructor}
            instructorLessons={instructorLessons}
          />
        }
        aside={
          <GetPublishedFaq />
        }
      />
    )
  }
}

GetPublished.propTypes = {
  instructor: React.PropTypes.object.isRequired,
}

export default GetPublished
