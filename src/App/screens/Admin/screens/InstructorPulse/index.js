import React from 'react'
import {instructorPulseTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'

export default () => (
  <Split
    intro={
      <div>intro</div>
    }
    title={instructorPulseTitleText}
    main={
      <div>main</div>
    }
    aside={
      <div>aside</div>
    }
  />
)
