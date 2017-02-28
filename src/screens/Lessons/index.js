import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import AllLessons from './components/AllLessons'

export default () => (
  <Split
    title={lessonsTitleText}
    main={
      <AllLessons />
    }
    aside={
      <div>hi</div>
    }
  />
)
