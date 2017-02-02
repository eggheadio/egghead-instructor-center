import React from 'react'
import {overviewTitleText} from 'utils/text'
import Split from 'components/Split'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
import Lessons from './components/Lessons'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    intro={
      <Hello instructor={instructor} />
    }
    title={overviewTitleText}
    main={
      <div>
        <NextMilestone lessonPage={lessonPage} />
        <Lessons
          instructor={instructor}
          lessonPage={lessonPage}
        />
      </div>
    }
    aside={
      <div>
        <div className='mb4'>
          <Stats instructor={instructor} />
        </div>
        <Help />
      </div>
    }
  />
)
