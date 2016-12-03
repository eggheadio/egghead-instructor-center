import React from 'react'
import Heading from '../../../../../../components/Heading'
import Tabs from './components/Tabs'
import InProgress from './components/InProgress'
import Published from './components/Published'

export default ({instructor, lessonPage}) => (
  <div>
    
    <Heading level='2'>
      Lessons
    </Heading>

    <Tabs groups={[
      {
        title: 'In Progress',
        component: (
          <InProgress
            instructor={instructor}
            lessonPage={lessonPage}
          />
        ),
      },
      {
        title: 'Published',
        component: (
          <Published
            instructor={instructor}
            lessonPage={lessonPage}
          />
        ),
      },
    ]} />
  </div>
)
