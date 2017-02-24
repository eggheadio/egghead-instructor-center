import React from 'react'
import {truncate} from 'lodash'
import {Link} from 'react-router-dom'
import {Button, Heading} from 'egghead-ui'
import {viewActionText} from 'utils/text'
import {statusByLessonState} from 'utils/lessonStates'

export default ({instructor, lesson}) => {

  return (
    <div className='flex items-start'>

      <img
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='mw2 mr3'
      />

      <div>
        <Heading level='5'>
          {lesson.title}
        </Heading>
        <div className={`
          mb2 ttu tc pa1 br2 ba f6 dib
          ${statusByLessonState[lesson.state].requiresUserAction
            ? 'blue b--blue'
            : 'yellow b--yellow'
          }
        `}>
          {lesson.state}
        </div>
        <div style={{
          wordBreak: 'break-word',
        }}>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
        <div className='mt2'>
          <Link to={`/lessons/${lesson.slug}`}>
            <Button size='small'>
              {viewActionText}
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}
