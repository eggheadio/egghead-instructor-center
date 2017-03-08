import React from 'react'
import Screen from 'components/Screen'
import LessonNextSteps from 'components/LessonNextSteps'
import LessonStatus from 'components/LessonStatus'
import LessonData from './components/LessonData'
import WistiaVideo from './components/WistiaVideo'

export default ({instructor, lesson}) => (
  <div>
    {lesson.wistia_id
      ? <WistiaVideo wistiaId={lesson.wistia_id}/>
      : null}
    <Screen
      title={lesson.title}
      main={
        <div>
          <LessonData
            instructor={instructor}
            lesson={lesson}
          />
        </div>

      }
      aside={
        <div>
          <LessonStatus lesson={lesson}/>
          <div className="mt3">
            <LessonNextSteps lesson={lesson}/>
          </div>
        </div>
      }
    />
  </div>

)
