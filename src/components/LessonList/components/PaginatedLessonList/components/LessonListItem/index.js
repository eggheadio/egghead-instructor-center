import React from 'react'
import {Link} from 'react-router-dom'
import {Heading, Markdown} from 'egghead-ui'
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

      <img
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='mw2 mr3'
      />

      <div>

        <Link to={`/lessons/${lesson.slug}`}>
          <Heading level='4'>
            {lesson.title}
          </Heading>
        </Link>

        {lesson.state === 'requested' 
          ? null
          : <div className='mt3'>
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
        }

        <div
          className='mt2'
          style={{
            wordBreak: 'break-word',
          }}
        >
          {lesson.summary
            ? <Markdown>
                {lesson.summary}
              </Markdown>
            : null
          }
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
