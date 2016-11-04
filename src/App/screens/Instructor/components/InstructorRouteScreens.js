import React from 'react'
import Match from 'react-router/Match'
import InstructorOverview from '../screens/InstructorOverview'
import GetPublished from '../screens/GetPublished'
import LessonTopics from '../screens/LessonTopics'
import SubmitLesson from '../screens/SubmitLesson'
import SubmissionList from '../screens/SubmissionList'

class InstructorRouteScreens extends React.Component {
  render() {
    const {pathname, instructor} = this.props
    return (
      <div>
        <Match 
          pattern={`${pathname}`} exactly
          render={(props) => (instructor.published_lessons > 0)
            ? <InstructorOverview {...this.props} />
            : <GetPublished {...this.props} />
          }
        />
        <Match 
          pattern={`${pathname}/topics`}
          render={(props) => <LessonTopics {...this.props} />}
        />
        <Match
          pattern={`${pathname}/submit`}
          render={(props) => <SubmitLesson {...this.props} />}
        />
        <Match
          pattern={`${pathname}/submissions`}
          render={(props) => <SubmissionList {...this.props} />}
        />
      </div>
    )
  }
}

export default InstructorRouteScreens