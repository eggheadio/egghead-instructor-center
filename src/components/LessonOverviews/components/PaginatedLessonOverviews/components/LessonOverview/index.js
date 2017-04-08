import React from 'react'
import {Link} from 'react-router-dom'
import {Maybe, Heading, Markdown} from 'egghead-ui'
import Image from 'components/Image'
import Avatar from 'components/Avatar'
import LessonState from 'components/LessonState'
import LessonActions from 'components/LessonActions'

export default ({lesson, requestCurrentPage}) => {
  const {instructor} = lesson
  return (
    <div
      className='flex items-start'
      style={{
        wordBreak: 'break-word',
      }}
    >

      <Image 
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='w2 h2 mr3'
      />

      <div>

        <Link to={`/lessons/${lesson.slug}`}>
          <Heading level='4'>
            {lesson.title}
          </Heading>
        </Link>

        <Maybe condition={lesson.state !== 'requested'}>
          <div className='mt3'>
            <Link to={`/instructors/${instructor.slug}`}>
              <div className='flex items-center'>
                <Avatar
                  name={instructor.full_name}
                  url={instructor.avatar_url}
                  size={2}
                />
                <div className='ml3'>
                  {instructor.full_name}
                </div>
              </div>
            </Link>
          </div>
        </Maybe>

        <div
          className='mt2'
          style={{
            wordBreak: 'break-word',
          }}
        >
          <Maybe condition={Boolean(lesson.summary)}>
            <Markdown>
              {lesson.summary}
            </Markdown>
          </Maybe>
        </div>

        <div className='mt3'>
          <LessonState lesson={lesson}/>
        </div>

        <div className="mt3">
          <LessonActions 
            lesson={lesson} 
            requestCurrentPage={requestCurrentPage}
          />
        </div>

      </div>

    </div>
  )
}
