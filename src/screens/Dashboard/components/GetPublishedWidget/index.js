import React from 'react'
import {map, uniq, compact, isString} from 'lodash'
import {
  getPublishedTitleText,
  getPublishedDescriptionText,
} from 'utils/text'
import {chatInfoUrl, roughDraftInfoUrl, gearSetupInfoUrl} from 'utils/urls'
import createLessonsUrl from 'utils/createLessonsUrl'
import Widget from 'components/Widget'
import WrappedRequest from 'components/WrappedRequest'
import isStepComplete from './utils/isStepComplete'
import Checklist from './components/Checklist'

export default ({instructor}) => instructor.published_lessons === 0
  ? <WrappedRequest url={createLessonsUrl({
      lessons_url: instructor.lessons_url
    })}>
      {({data}) => {
        const instructorLessonStates = compact(uniq(map(data, 'state')))
        return (
          <Widget
            title={getPublishedTitleText}
            description={getPublishedDescriptionText}
          >
            <Checklist items={[
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
            ]} />
          </Widget>
        )
      }}
    </WrappedRequest>
  : null
