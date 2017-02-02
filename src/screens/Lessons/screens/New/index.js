import React from 'react'
import {newLessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import Requested from './components/Requested'
import Propose from './components/Propose'

export default ({instructor}) => (
  <Split
    title={newLessonsTitleText}
    main={
      <Requested instructor={instructor} />
    }
    aside={
      <Propose instructor={instructor} />
    }
  />
)
