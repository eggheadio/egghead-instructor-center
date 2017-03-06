import React from 'react'
import {lessonTitleText, noVideoDescriptionText} from 'utils/text'
import Screen from 'components/Screen'
import LessonNextSteps from './components/LessonNextSteps'
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
        <LessonNextSteps lesson={lesson}/>
      }
    />
  </div>

)
