import React from 'react'
import {
  newLessonsTitleText,
  newLessonsInstructionsDescriptionText,
  newLessonsInstructionsActionText,
} from 'utils/text'
import {newLessonsInfoUrl} from 'utils/urls'
import Screen from 'components/Screen'
import Instructions from './components/Instructions'
import Requested from './components/Requested'
import Propose from './components/Propose'

export default ({instructor}) => (
  <Screen
    title={newLessonsTitleText}
    intro={
      instructor.published_lessons === 0 && instructor.pending_lessons === 0
        ? <Instructions
            instructor={instructor}
            description={newLessonsInstructionsDescriptionText}
            actionText={newLessonsInstructionsActionText}
            action={newLessonsInfoUrl}
          />
        : null
    }
    main={
      <Requested instructor={instructor} />
    }
    aside={
      <Propose instructor={instructor} />
    }
  />
)
