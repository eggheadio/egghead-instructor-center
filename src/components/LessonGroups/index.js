import React from 'react'
import {map, compact} from 'lodash'
import {
  newLessonsActionText,
  inProgressTitleText,
  inReviewTitleText,
  inQueueTitleText,
  publishedTitleText,
  inReviewDescriptionText,
  selfReviewDescriptionText,
  inQueueDescriptionText,
  noInProgressLessonsDescriptionText,
  noInReviewLessonsDescriptionText,
  noInQueueLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
} from 'utils/text'
import {hasUnlockedSelfReview} from 'utils/milestones'
import LessonList from 'components/LessonList'
import Tabs from 'components/Tabs'
import Prompt from 'components/Prompt'

export default ({instructor}) => {

  const items = compact([
    {
      title: inProgressTitleText,
      states: [
        'accepted',
        'claimed',
        'rejected',
      ],
      fallbackDescription: noInProgressLessonsDescriptionText,
      includeLessonsInCourses: true,
    },
    {
      title: inReviewTitleText,
      description: inReviewDescriptionText
        + (instructor && hasUnlockedSelfReview(instructor.published_lessons)
          ? ` ${selfReviewDescriptionText}`
          : ''),
      states: [
        'proposed',
        'submitted',
        'updated',
      ],
      fallbackDescription: noInReviewLessonsDescriptionText,
      includeLessonsInCourses: true,
    },
    {
      title: inQueueTitleText,
      description: inQueueDescriptionText,
      states: [
        'approved'
      ],
      fallbackDescription: noInQueueLessonsDescriptionText,
      includeLessonsInCourses: false,
    },
    instructor
      ? null
      : {
          title: publishedTitleText,
          states: [
            'published',
            'flagged',
            'revised',
          ],
          fallbackDescription: noPublishedLessonsDescriptionText,
          includeLessonsInCourses: false,
        },
  ])

  return (
    <Tabs groups={map(items, (item) => ({
      title: item.title,
      component: (
        <div>
          {item.description
            ? <div className='pv3 ph4 bg-gray f6'>
                {item.description}
              </div>
            : null
          }
          <LessonList
            states={item.states}
            fallback={
              <div className='pa4'>
                <Prompt
                  description={item.fallbackDescription}
                  actionText={newLessonsActionText}
                  action={'/lessons/new'}
                />
              </div>
            }
            instructor={instructor}
            includeLessonsInCourses={item.includeLessonsInCourses}
          />
        </div>
      ),
    }))} />
  )
}
