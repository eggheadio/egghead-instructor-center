import React from 'react'
import {map, uniq, compact, isString, size, filter} from 'lodash'
import {Text} from 'react-localize'
import {Maybe} from 'egghead-ui'
import {chatInfoUrl, roughDraftInfoUrl, gearSetupInfoUrl} from 'utils/urls'
import {hasUnlockedPublished} from 'utils/milestones'
import createLessonsUrl from 'utils/createLessonsUrl'
import TitleCard from 'components/TitleCard'
import WrappedRequest from 'components/WrappedRequest'
import isStepComplete from './utils/isStepComplete'
import Progress from './components/Progress'
import Checklist from './components/Checklist'

export default ({instructor}) => (
  <Maybe condition={!hasUnlockedPublished(instructor.published_lessons)}>
    <WrappedRequest
      url={createLessonsUrl({
        lessons_url: instructor.lessons_url
      })}
      subscribe
    >
      {({data}) => {
        const instructorLessonStates = compact(uniq(map(data, 'state')))

        const checklistItems = [
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
          <TitleCard
            title={<Text message='getPublished.title' />}
            description={<Text message='getPublished.description' />}
            intro={
              <Progress 
                total={size(checklistItems)}
                complete={size(filter(checklistItems, 'isComplete'))}
              />
            }
          >
            <Checklist items={checklistItems} />
          </TitleCard>
        )
      }}
    </WrappedRequest>
  </Maybe>
)
