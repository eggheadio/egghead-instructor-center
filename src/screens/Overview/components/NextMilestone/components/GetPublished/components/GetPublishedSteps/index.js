import React, {PropTypes} from 'react'
import {map, uniq, compact, isString} from 'lodash'
import {getPublishedDescriptionText} from 'utils/text'
import {
  chatInfoUrl, 
  roughDraftInfoUrl, 
  gearSetupInfoUrl,
} from 'utils/urls'
import isStepComplete from './utils/isStepComplete'
import Checklist from './components/Checklist'
import DescriptionBlock from './components/DescriptionBlock'

const GetPublishedSteps = ({instructor}) => {

  const lessons = []
  const instructorLessonStates = compact(uniq(map(lessons, 'state')))

  const steps = [
    {
      isComplete: true,
      description: 'Create instructor account',
    },
    {
      isComplete: isString(instructor.slack_id),
      description: 'Join egghead Slack',
      moreInfoUrl: chatInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'claimed'),
      description: 'Claim new lesson',
      action: '/lessons/new',
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'submitted'),
      description: 'Submit rough draft',
      moreInfoUrl: roughDraftInfoUrl,
    },
    {
      isComplete: isString(instructor.gear_tracking_id),
      description: 'Get gear',
      moreInfoUrl: gearSetupInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'updated'),
      description: 'Re-record with gear',
      moreInfoUrl: roughDraftInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'approved'),
      description: 'Iterate until approved',
      moreInfoUrl: roughDraftInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'published'),
      description: 'Publish lesson',
    },
  ]

  return (
    <div>

      <DescriptionBlock>
        {getPublishedDescriptionText}
      </DescriptionBlock>

      <div className='mt3'>
        <Checklist 
          items={steps} 
          instructorId={instructor.id}
        />
      </div>

    </div>
  )
}

GetPublishedSteps.propTypes = {
  instructor: PropTypes.object.isRequired,
}

export default GetPublishedSteps
