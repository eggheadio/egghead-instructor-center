import React from 'react'
import {lessonTitleText} from 'utils/text'
import Request from 'components/Request'
import Split from 'components/Split'
import NextStep from './components/NextStep'
import Data from './components/Data'

export default ({lessonSlug}) => (
  <Request url={`/api/v1/lessons/${lessonSlug}`}>
    {({data}) => (
      <Split
        title={lessonTitleText}
        main={
          <NextStep lesson={data} />
        }
        aside={
          <Data lesson={data} />
        }
      />
    )}
  </Request>
)
