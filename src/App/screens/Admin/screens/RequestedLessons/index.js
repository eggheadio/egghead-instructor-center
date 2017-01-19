import React from 'react'
import {requestedLessonsTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'

export default () => (
  <Split
    intro={
      <div>intro</div>
    }
    title={requestedLessonsTitleText}
    main={
      <div>main</div>
    }
    aside={
      <div>aside</div>
    }
  />
)
