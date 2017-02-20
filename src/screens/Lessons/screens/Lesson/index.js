import React from 'react'
import {lessonTitleText} from 'utils/text'
import Split from 'components/Split'
import LessonNextSteps from './components/LessonNextSteps'
import LessonData from './components/LessonData'

export default ({instructor, lesson}) => (
  <Split
    title={lessonTitleText}
    main={
      <LessonNextSteps lesson={lesson} />
    }
    aside={
      <LessonData 
        instructor={instructor}
        lesson={lesson} 
      />
    }
  />
)
