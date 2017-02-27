import React from 'react'
import {newLessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import NewInstructions from './components/NewInstructions'
import Requested from './components/Requested'
import Propose from './components/Propose'

export default ({instructor}) => (
  <Split
    title={newLessonsTitleText}
    instructions={
      <NewInstructions />
    }
    main={
      <Requested instructor={instructor} />
    }
    aside={
      <Propose instructor={instructor} />
    }
  />
)
