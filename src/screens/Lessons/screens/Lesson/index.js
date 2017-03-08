import React from 'react'
import Screen from 'components/Screen'
import WistiaVideo from './components/WistiaVideo'
import LessonData from './components/LessonData'
import LessonState from 'components/LessonState'
import LessonActions from 'components/LessonActions'

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
        <LessonState lesson={lesson}/>
        <div className='mt3'>
          <LessonActions lesson={lesson} />
        </div>
      </div>
    }
  />
)
