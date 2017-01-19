import React from 'react'
import {newRequestedLessonsTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'

export default () => (
  <Split
    intro={
      <div>intro</div>
    }
    title={newRequestedLessonsTitleText}
    main={
      <div>main</div>
    }
    aside={
      <div>aside</div>
    }
  />
)
