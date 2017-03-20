import React from 'react'
import {Link} from 'react-router-dom'
import {Heading} from 'egghead-ui'
import {
  inProgressTitleText,
  inReviewTitleText,
  inQueueTitleText,
  publishedTitleText,
} from 'utils/text'
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
              label={inProgressTitleText}
              count={instructor.claimed_lessons}
            /> 
          </div>
        : null
      }
      {instructor.submitted_lessons
        ? <div className='mt3 mr3'>
            <LessonGroupsStat
              label={inReviewTitleText}
              count={instructor.submitted_lessons}
            /> 
          </div>
        : null
      }
      {instructor.approved_lessons
        ? <div className='mt3 mr3'>
            <LessonGroupsStat
              label={inQueueTitleText}
              count={instructor.approved_lessons}
            /> 
          </div>
        : null
      }
      {instructor.published_lessons
        ? <div className='mt3'>
            <LessonGroupsStat
              label={publishedTitleText}
              count={instructor.published_lessons}
            /> 
          </div>
        : null
      }
    </section>

  </div>
)
