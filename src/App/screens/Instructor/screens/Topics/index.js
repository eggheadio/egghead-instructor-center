import React from 'react'
import Split from '../../../../components/Split'
import Requested from './components/Requested'
import Submit from './components/Submit'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    title='Topics'
    main={
      <Requested
        instructor={instructor}
        lessonPage={lessonPage}
      />
    }
    aside={
      <Submit instructor={instructor} />
    }
  />
)
