import React from 'react'
import {newLessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import Requested from './components/Requested'
import Submit from './components/Submit'

export default ({
  instructor,
  lessonPage,
}) => (
  <Split
    title={newLessonsTitleText}
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
