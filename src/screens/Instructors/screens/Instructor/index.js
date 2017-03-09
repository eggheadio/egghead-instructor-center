import React from 'react'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
import Stats from './components/Stats'
import LessonListsByStates from 'components/LessonListsByStates'
import Help from './components/Help'

export default ({instructor}) => (
  <div>
    <Hello instructor={instructor} />
    <NextMilestone instructor={instructor} />
    <Stats instructor={instructor} />
    <LessonListsByStates instructor={instructor} />
    <Help />
  </div>
)
