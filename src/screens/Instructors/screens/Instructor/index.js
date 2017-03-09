import React from 'react'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
import Stats from './components/Stats'
import Revenue from './components/Revenue'
import LessonListsByStates from 'components/LessonListsByStates'
import Help from './components/Help'

export default ({instructor}) => (
  <div>
    <Hello instructor={instructor} />
    <Help instructor={instructor} />
    <NextMilestone instructor={instructor} />
    <Stats instructor={instructor} />
    <Revenue instructor={instructor} />
    <LessonListsByStates instructor={instructor} />
  </div>
)
