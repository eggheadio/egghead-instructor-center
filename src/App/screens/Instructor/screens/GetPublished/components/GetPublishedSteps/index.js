import React from 'react'
import includes from 'lodash/includes'
import indexOf from 'lodash/indexOf'
import slice from 'lodash/slice'
import some from 'lodash/some'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import compact from 'lodash/uniq'
import Checklist from './components/Checklist'
import DescriptionBlock from './components/DescriptionBlock'

const lessonStates = [
  'proposed',
  'cancelled',
  'accepted',
  'claimed',
  'submitted',
  'rejected',
  'updated',
  'approved',
  'published',
  'flagged',
  'revised',
  'retired',
]

const GetPublishedSteps = ({
  instructor,
  instructorLessons,
}) => {

  const instructorLessonStates = compact(uniq(map(instructorLessons.lessons, 'state')))
  console.log(instructorLessonStates)

  const isStepComplete = minimumLessonState => {
    const qualifyingLessonStates = slice(lessonStates, indexOf(lessonStates, minimumLessonState))
    return some(qualifyingLessonStates, qualifyingLessonState => includes(instructorLessonStates, qualifyingLessonState))
  }

  const steps = [
    {
      isComplete: true,
      description: 'Create an instructor account',
    },
    {
      isComplete: true,
      description: 'Join egghead Slack',
      moreInfoUrl: 'https://instructor.egghead.io/01-invited/invited.html',
    },
    {
      isComplete: isStepComplete('submitted'),
      description: 'Submit rough draft lesson',
      moreInfoUrl: 'https://instructor.egghead.io/01-invited/first-lesson.html',
    },
    {
      isComplete: true,
      description: 'Get gear',
      moreInfoUrl: 'https://instructor.egghead.io/02-creating-lessons/recording-gear.html',
    },
    {
      isComplete: isStepComplete('updated'),
      description: 'Re-record and update lesson',
    },
    {
      isComplete: isStepComplete('approved'),
      description: 'Iterate with mentor until lesson is approved',
    },
    {
      isComplete: isStepComplete('published'),
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
