import React from 'react'
import Match from 'react-router/Match'
import Miss404 from '../../../components/Miss404'
import Overview from '../screens/Overview'
import GetPublished from '../screens/GetPublished'
import PublishedLessons from '../screens/PublishedLessons'

const InstructorRouteScreens = (props) => (
  <div>
    <Match 
      exactly
      pattern={props.pathname}
      render={(matchProps) => (props.instructor.published_lessons > 0)
        ? <Overview {...props} />
        : <GetPublished {...props} />
      }
    />
    <Match 
      pattern={`${props.pathname}/published`}
      render={(matchProps) => <PublishedLessons {...props} />}
    />
    <Miss404 />
  </div>
)

export default InstructorRouteScreens
