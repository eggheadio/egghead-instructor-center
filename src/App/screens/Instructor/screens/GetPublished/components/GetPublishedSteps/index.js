import React from 'react'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import compact from 'lodash/uniq'
import isString from 'lodash/isString'
import isStepComplete from './utils/isStepComplete'
import Checklist from './components/Checklist'
import DescriptionBlock from './components/DescriptionBlock'

const GetPublishedSteps = ({
  instructor,
  instructorLessons,
}) => {

  const instructorLessonStates = compact(uniq(map(instructorLessons.lessons, 'state')))

  console.log(instructor)
  const steps = [
    {
      isComplete: true,
      description: 'Create an instructor account',
    },
    {
      isComplete: isString(instructor.slack_id),
      description: 'Join egghead Slack',
      moreInfoUrl: 'https://instructor.egghead.io/01-invited/invited.html',
    },
    {
      isComplete: isStepComplete(instructorLessonStates, 'submitted'),
      description: 'Submit rough draft lesson',
      moreInfoUrl: 'https://instructor.egghead.io/01-invited/first-lesson.html',
    },
    {
      isComplete: isString(instructor.gear_tracking_id),
      description: 'Get gear',
      moreInfoUrl: 'https://instructor.egghead.io/02-creating-lessons/recording-gear.html',
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
      <h2 className='f2'>To Do</h2>
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
  instructor: React.PropTypes.object.isRequired,
  instructorLessons: React.PropTypes.object.isRequired,
}

export default GetPublishedSteps
