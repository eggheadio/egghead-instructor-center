import React from 'react'
import Screen from 'components/Screen'
import LessonNextSteps from 'components/LessonNextSteps'
import LessonData from './components/LessonData'
import WistiaVideo from './components/WistiaVideo'

export default ({instructor, lesson}) => (
  <Screen
    title={lesson.title}
    intro={
      lesson.wistia_id
        ? <WistiaVideo wistiaId={lesson.wistia_id} />
        : null
    }
    main={
      <LessonData
        instructor={instructor}
        lesson={lesson}
      />
    }
    aside={
      <LessonNextSteps lesson={lesson}/>
    }
  />
)
