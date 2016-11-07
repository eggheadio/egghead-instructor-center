import React from 'react'
import Match from 'react-router/Match'
import Miss404 from '../../../components/Miss404'
import InstructorOverview from '../screens/InstructorOverview'
import GetPublished from '../screens/GetPublished'
import LessonTopics from '../screens/LessonTopics'
import SubmitLesson from '../screens/SubmitLesson'
import SubmissionList from '../screens/SubmissionList'

const InstructorRouteScreens = (props) => (
  <div>
    <Match 
      exactly
      pattern={props.pathname}
      render={(matchProps) => (props.instructor.published_lessons > 0)
        ? <InstructorOverview {...props} />
        : <GetPublished {...props} />
      }
    />
    <Match 
      pattern={`${props.pathname}/topics`}
      render={(matchProps) => <LessonTopics {...props} />}
    />
    <Match
      pattern={`${props.pathname}/submit`}
      render={(matchProps) => <SubmitLesson {...props} />}
    />
    <Match
      pattern={`${props.pathname}/submissions`}
      render={(matchProps) => <SubmissionList {...props} />}
    />
    <Miss404 />
  </div>
)

export default InstructorRouteScreens
