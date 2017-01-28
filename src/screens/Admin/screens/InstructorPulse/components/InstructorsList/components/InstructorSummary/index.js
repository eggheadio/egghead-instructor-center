import React from 'react'
import {Link} from 'react-router'
import {viewActionText} from 'utils/text'
import Heading from 'components/Heading'
import Avatar from 'components/Avatar'

const LessonCount = ({label, count}) => (
  <dl className="fl fn-l dib-l w-auto-l lh-title mr3-l">
    <dd className="f6 fw4 ml0">{label}</dd>
    <dd className="f3 fw6 ml0">{count}</dd>
  </dl>
)

export default ({instructor}) => (
  <div className='flex items-center'>
    <div className='mr2'>
      <Avatar
        name={instructor.first_name}
        url={instructor.avatar_url}
      />
    </div>
    <div>
      <Heading level='5'>
        {instructor.full_name}
      </Heading>
      <Link 
        to={`/instructors/${instructor.slug}`}
        className='blue'
      >
        {viewActionText}
      </Link>
      <section className="flex pa1">
        <div className="cf">
          { instructor.claimed_lessons ?
            <LessonCount label="Claimed" count={instructor.claimed_lessons}/> : null}
          { instructor.submitted_lessons ?
            <LessonCount label="Submitted" count={instructor.submitted_lessons}/> : null}
          { instructor.approved_lessons ?
            <LessonCount label="Approved" count={instructor.approved_lessons}/> : null}
          { instructor.published_lessons ?
            <LessonCount label="Published" count={instructor.published_lessons}/> : null}
        </div>
      </section>
    </div>

  </div>
)
