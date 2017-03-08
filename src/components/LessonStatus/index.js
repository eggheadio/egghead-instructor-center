import React from 'react'
import {statusByLessonState, colorByLessonState} from 'utils/lessonStates'

export default function LessonStatus({lesson}) {
  const statusColor = colorByLessonState[lesson.state].color
  return (
    <div>
      <div className={`
        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib
        ${statusColor} b--${statusColor}
      `}>
        {lesson.state}
      </div>
      <div className="white-50">
        {statusByLessonState[lesson.state].description}
      </div>
    </div>
  )
}
