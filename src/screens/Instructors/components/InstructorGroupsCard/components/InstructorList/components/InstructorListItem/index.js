import React from 'react'
import {Link} from 'react-router-dom'
import {Heading} from 'egghead-ui'
import {Text} from 'react-localize'
import Avatar from 'components/Avatar'
import LessonGroupsStat from './components/LessonGroupsStat'

export default ({instructor}) => (
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

    <section className="flex flex-wrap">
      {instructor.claimed_lessons 
        ? <div className='mt3 mr3'>
            <LessonGroupsStat
              label={<Text message='lessonGroups.inProgress.title' />}
              count={instructor.claimed_lessons}
            /> 
          </div>
        : null
      }
      {instructor.submitted_lessons
        ? <div className='mt3 mr3'>
            <LessonGroupsStat
              label={<Text message='lessonGroups.inReview.title' />}
              count={instructor.submitted_lessons}
            /> 
          </div>
        : null
      }
      {instructor.approved_lessons
        ? <div className='mt3 mr3'>
            <LessonGroupsStat
              label={<Text message='lessonGroups.inQueue.title' />}
              count={instructor.approved_lessons}
            /> 
          </div>
        : null
      }
      {instructor.published_lessons
        ? <div className='mt3'>
            <LessonGroupsStat
              label={<Text message='lessonGroups.published.title' />}
              count={instructor.published_lessons}
            /> 
          </div>
        : null
      }
    </section>

  </div>
)
