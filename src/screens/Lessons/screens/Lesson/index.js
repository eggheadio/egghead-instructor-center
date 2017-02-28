import React from 'react'
import {lessonTitleText} from 'utils/text'
import Split from 'components/Split'
import LessonNextSteps from './components/LessonNextSteps'
import LessonData from './components/LessonData'

export default ({instructor, lesson}) => (
  <Split
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
