import React, {PropTypes} from 'react'
import {map, uniq, compact, isString} from 'lodash'
import {chatInfoUrl, roughDraftInfoUrl, gearSetupInfoUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import isStepComplete from './utils/isStepComplete'
import Checklist from './components/Checklist'
import DescriptionBlock from './components/DescriptionBlock'

const GetPublishedSteps = ({
  instructor,
  lessonPage,
}) => {

  const instructorLessonStates = compact(uniq(map(lessonPage.lessons, 'state')))

  const steps = [
    {
      isComplete: true,
      description: 'Create an instructor account',
    },
    {
      isComplete: isString(instructor.slack_id),
      description: 'Join egghead Slack',
      moreInfoUrl: chatInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'claimed'),
      description: 'Claim a new lesson',
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'submitted'),
      description: 'Submit rough draft lesson',
      moreInfoUrl: roughDraftInfoUrl,
    },
    {
      isComplete: isString(instructor.gear_tracking_id),
      description: 'Get gear',
      moreInfoUrl: gearSetupInfoUrl,
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'updated'),
      description: 'Re-record and update lesson',
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'approved'),
      description: 'Iterate with mentor until lesson is approved',
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'published'),
      description: 'Publish lesson',
    },
  ]

  return (
    <div>

      <Heading level='2'>
        To Do
      </Heading>

      <DescriptionBlock>
        Hey {instructor.first_name}! Work with your mentor to complete these items so you can get published!
      </DescriptionBlock>

      <div className='mt3'>
        <Checklist items={steps} />
      </div>

    </div>
  )
}

GetPublishedSteps.propTypes = {
  instructor: PropTypes.object.isRequired,
  lessonPage: PropTypes.object.isRequired,
}

export default GetPublishedSteps
