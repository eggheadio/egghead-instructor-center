import React from 'react'
import Heading from '../../../../../../components/Heading'
import InProgress from './components/InProgress'
import Published from './components/Published'

export default ({instructor, lessonPage}) => (
  <div>

    <Heading level='2'>
      Lessons
    </Heading>

    <InProgress
      instructor={instructor}
      lessonPage={lessonPage}
    />

    <Published
      instructor={instructor}
      lessonPage={lessonPage}
    />

  </div>
)
