import React from 'react'

import {overviewTitleText} from 'utils/text'

import Split from 'components/Split'

import Intro from './components/Intro'
import Lessons from './components/Lessons'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    intro={
      <Intro instructor={instructor} />
    }
    title={overviewTitleText}
    main={
      <Lessons
        instructor={instructor}
        lessonPage={lessonPage}
      />
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
