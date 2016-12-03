import React from 'react'
import Split from '../../../../components/Split'
import Lessons from './components/Lessons'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    title={instructor.first_name}
    main={
      <Lessons
        instructor={instructor}
        lessonPage={lessonPage}
      />
    }
    aside={
      <div>
        <Stats instructor={instructor} />
        <Help />
      </div>
    }
  />
)
