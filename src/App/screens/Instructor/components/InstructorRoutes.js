import React from 'react'
import Match from 'react-router/Match'
import InstructorOverview from '../screens/InstructorOverview'
import LessonTopics from '../screens/LessonTopics'
import SubmitLesson from '../screens/SubmitLesson'
import SubmissionList from '../screens/SubmissionList'

class InstructorRoutes extends React.Component {
  render() {
    const {pathname} = this.props
    return (
      <div>
        <Match 
          pattern={`${pathname}`} exactly
          render={(props) => <InstructorOverview {...this.props} />}
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

export default InstructorRoutes
