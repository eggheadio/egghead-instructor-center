import React from 'react'
import {Link} from 'react-router-dom'
import {Heading, Markdown} from 'egghead-ui'
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
          <Heading level='3'>
            {lesson.title}
          </Heading>
        </Link>

        {lesson.state === 'requested' 
          ? null
          : <Link to={`/instructors/${instructor.slug}`} className="no-underline">
              <div className='flex items-center pt1'>
                <img src={instructor.avatar_url} alt={instructor.full_name} className='w2 h2 br-pill mr2'/>
                <span className='f6 ttc'>{instructor.full_name}</span>
              </div>
            </Link>
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

        <LessonState lesson={lesson}/>

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
