import React from 'react'
import Screen from 'components/Screen'
import LessonNextSteps from 'components/LessonNextSteps'
import LessonStatus from 'components/LessonStatus'
import LessonData from './components/LessonData'
import WistiaVideo from './components/WistiaVideo'

export default ({instructor, lesson}) => (
  <Screen
    title={lesson.title}
    intro={
      lesson.wistia_id
        ? <div
            className='mb3 mw6 tc'
            style={{
              marginLeft: 'auto', 
              marginRight: 'auto'
            }}
          >
            <WistiaVideo wistiaId={lesson.wistia_id} />
          </div>
        : null
    }
    main={
      <LessonData
        instructor={instructor}
        lesson={lesson}
      />
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
)
