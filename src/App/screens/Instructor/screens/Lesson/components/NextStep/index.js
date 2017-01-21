import React from 'react'
import {
  statusTitleText,
  claimedDescriptionText,
  submittedDescriptionText,
  rejectedDescriptionText,
  updatedDescriptionText,
  approvedDescriptionText,
  publishedDescriptionText,
} from '../../../../../../utils/text'
import Heading from '../../../../../../components/Heading'

const statusByLessonState = {
  claimed: {
    requiresUserAction: true,
    description: claimedDescriptionText,
  },
  submitted: {
    description: submittedDescriptionText,
  },
  rejected: {
    requiresUserAction: true,
    description: rejectedDescriptionText,
  },
  updated: {
    description: updatedDescriptionText,
  },
  approved: {
    description: approvedDescriptionText,
  },
  published: {
    description: publishedDescriptionText,
  },
}

export default ({lesson}) => statusByLessonState[lesson.state]
  ?  <div>

        <Heading level='3'>
          {statusTitleText}
        </Heading>
        <div className={`
          mb2 ttu tc pa2 br2 ba
          ${statusByLessonState[lesson.state].requiresUserAction ? 'orange b--orange' : 'b--black-50'}
        `}>
          {lesson.state}
        </div>
        <div>
          {statusByLessonState[lesson.state].description}
        </div>

      </div>
  : null
