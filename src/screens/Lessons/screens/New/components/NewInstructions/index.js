import React from 'react'
import Prompt from 'components/Prompt'
import {
  newLessonsInstructionsDescriptionText,
  newLessonsInstructionsActionText,
} from 'utils/text'
import {newLessonsInfoUrl} from 'utils/urls'

export default () => (
  <Prompt
    description={newLessonsInstructionsDescriptionText}
    actionText={newLessonsInstructionsActionText}
    action={newLessonsInfoUrl}
  />
)
