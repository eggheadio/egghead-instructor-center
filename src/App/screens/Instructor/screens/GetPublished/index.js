import React, {Component, PropTypes} from 'react'
import Split from '../../../../components/Split'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

class GetPublished extends Component {

  componentWillMount() {
    const {instructor, requestInstructorLessons} = this.props
    requestInstructorLessons({
      lessons_url: instructor.lessons_url,
      page: 1,
      size: 10,
    })
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
  instructor: PropTypes.object.isRequired,
}

export default GetPublished
