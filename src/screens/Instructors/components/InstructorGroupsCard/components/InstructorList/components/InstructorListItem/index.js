import React from 'react'
import {map} from 'lodash'
import {Link} from 'react-router-dom'
import {Maybe, Heading} from 'egghead-ui'
import {Text} from 'react-localize'
import Avatar from 'components/Avatar'
import LessonGroupsStat from './components/LessonGroupsStat'

export default ({instructor}) => {

  const lessonGroupsStats = [
    {
      message: 'lessonGroups.inProgress.title' ,
      count: instructor.claimed_lessons,
    },
    {
      message: 'lessonGroups.inReview.title',
      count: instructor.submitted_lessons,
    },
    {
      message: 'lessonGroups.inQueue.title' ,
      count: instructor.approved_lessons,
    },
    {
      message: 'lessonGroups.published.title' ,
      count: instructor.published_lessons,
    },
  ]

  return (
    <div>

      <div className='flex items-center'>

        <div className='mr3'>
          <Avatar
            name={instructor.first_name}
            url={instructor.avatar_url}
          />
        </div>

        <Link to={`/instructors/${instructor.slug}`}>
          <Heading level='3'>
            {instructor.full_name}
          </Heading>
        </Link>

      </div>

      <section className='flex flex-wrap'>
        {map(lessonGroupsStats, group => (
          <Maybe 
            key={group.message}
            condition={Boolean(group.count)}
          >
            <div className='mt3 mr3'>
              <LessonGroupsStat
                label={<Text message={group.message} />}
                count={group.count}
              /> 
            </div>
          </Maybe>
        ))}
      </section>

    </div>
  )
}
