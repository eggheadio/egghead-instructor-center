import React from 'react'
import {map, compact} from 'lodash'
import {Text} from 'react-localize'
import {publicLessonsUrl} from 'utils/urls'
import {hasUnlockedSelfReview} from 'utils/milestones'
import LessonList from 'components/LessonList'
import Tabs from 'components/Tabs'
import Prompt from 'components/Prompt'

export default ({instructor}) => {

  const items = compact([
    {
      title: <Text message='lessonGroups.inProgress.title' />,
      states: [
        'accepted',
        'claimed',
        'rejected',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: <Text message='lessonGroups.inReview.title' />,
      description: (
        <span>
          <Text message='lessonGroups.inReview.description' />
          {instructor && hasUnlockedSelfReview(instructor.published_lessons)
            ? <span>
                <span>{` `}</span>
                <Text message='lessonGroups.inReview.selfApproval' />
              </span>
            : null
          }
        </span>
      ),
      states: [
        'proposed',
        'submitted',
        'updated',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: <Text message='lessonGroups.inQueue.title' />,
      description: <Text message='lessonGroups.inQueue.description' />,
      states: [
        'approved'
      ],
      includeLessonsInCourses: false,
    },
  ])

  return (
    <Tabs groups={[
      ...map(items, (item) => ({
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
                    description={<Text message='lessonGroups.fallback' />}
                    actionText={<Text message='lessonGroups.action' />}
                    action={'/lessons/new'}
                  />
                </div>
              }
              instructor={instructor}
              includeLessonsInCourses={item.includeLessonsInCourses}
            />
          </div>
        ),
      })),
      {
        title: <Text message='lessonGroups.published.title' />,
        component: (
          <div className='pa4'>
            <Prompt
              description={<Text message='lessonGroups.published.description' />}
              actionText={<Text message='lessonGroups.published.action' />}
              action={publicLessonsUrl}
            />
          </div>
        ),
      },
    ]} />
  )
}
