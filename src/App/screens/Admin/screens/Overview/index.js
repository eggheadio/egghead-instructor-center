import React from 'react'
import {overviewTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'

export default () => (
  <Split
    intro={
      <div>intro</div>
    }
    title={overviewTitleText}
    main={
      <div>main</div>
    }
    aside={
      <div>aside</div>
    }
  />
)
