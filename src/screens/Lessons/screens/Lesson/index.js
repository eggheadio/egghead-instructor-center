import React from 'react'
import {lessonTitleText} from 'utils/text'
import Split from 'components/Split'
import NextStep from './components/NextStep'
import Data from './components/Data'

export default ({lesson}) => (
  <Split
    title={lessonTitleText}
    main={
      <NextStep lesson={lesson} />
    }
    aside={
      <Data lesson={lesson} />
    }
  />
)
