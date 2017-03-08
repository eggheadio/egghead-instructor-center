import React from 'react'
import {Link} from 'react-router-dom'
import {Heading, Markdown} from 'egghead-ui'
import LessonState from 'components/LessonState'
import LessonActions from 'components/LessonActions'

export default ({instructor, lesson}) => {

  return (
    <div className='flex items-start'>

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

        <div
          className='mt4 white-80'
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
          <LessonActions lesson={lesson} />
        </div>

      </div>

    </div>
  )
}
