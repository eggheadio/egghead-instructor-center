import React from 'react'
import {
  newLessonsInstructionsDescriptionText,
  newLessonsInstructionsActionText,
} from 'utils/text'
import {newLessonsInfoUrl} from 'utils/urls'
import InstructionsWidget from 'components/InstructionsWidget'
import RequestedWidget from './components/RequestedWidget'
import ProposeWidget from './components/ProposeWidget'

export default ({instructor}) => (
  <div>
    <InstructionsWidget
      condition={instructor.published_lessons === 0 && instructor.pending_lessons === 0}
      instructor={instructor}
      description={newLessonsInstructionsDescriptionText}
      actionText={newLessonsInstructionsActionText}
      action={newLessonsInfoUrl}
    />
    <RequestedWidget instructor={instructor} />
    <ProposeWidget instructor={instructor} />
  </div>
)
