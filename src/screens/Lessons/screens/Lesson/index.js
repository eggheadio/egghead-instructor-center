import React from 'react'
import {lessonTitleText} from 'utils/text'
import Screen from 'components/Screen'
import LessonNextSteps from './components/LessonNextSteps'
import LessonData from './components/LessonData'

export default ({instructor, lesson}) => (
  <Screen
    title={lessonTitleText}
    main={
      <LessonData 
        instructor={instructor}
        lesson={lesson} 
      />
    }
    aside={
      <LessonNextSteps lesson={lesson} />
    }
  />
)
