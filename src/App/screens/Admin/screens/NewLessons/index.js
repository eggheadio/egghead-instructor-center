import React from 'react'
import {newLessonsTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'

export default () => (
  <Split
    intro={
      <div>intro</div>
    }
    title={newLessonsTitleText}
    main={
      <div>main</div>
    }
    aside={
      <div>aside</div>
    }
  />
)
