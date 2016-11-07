import React from 'react'
import Match from 'react-router/Match'
import Miss404 from '../../../components/Miss404'
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
          exactly
          pattern={pathname}
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
        <Miss404 />
      </div>
    )
  }
}

export default InstructorRouteScreens
