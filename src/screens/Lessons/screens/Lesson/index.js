import React from 'react'
import {lessonTitleText} from 'utils/text'
import Split from 'components/Split'
import NextSteps from './components/NextSteps'
import Data from './components/Data'

export default ({lesson}) => (
  <Split
    title={lessonTitleText}
    main={
      <NextSteps lesson={lesson} />
    }
    aside={
      <Data lesson={lesson} />
    }
  />
)
