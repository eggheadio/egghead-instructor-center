import React from 'react'
import {lessonTitleText} from 'utils/text'
import Fetch from 'components/Fetch'
import Split from 'components/Split'
import NextStep from './components/NextStep'
import Data from './components/Data'

export default ({lessonSlug}) => (
  <Fetch path={`/api/v1/lessons/${lessonSlug}`}>
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
  </Fetch>
)
