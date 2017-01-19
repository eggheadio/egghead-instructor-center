import React from 'react'
import {newRequestedLessonsTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'
import Submit from '../../../../components/Submit'

export default () => (
  <Split
    title={newRequestedLessonsTitleText}
    main={
      <div>main</div>
    }
    aside={
      <Submit type='accepted' />
    }
  />
)
