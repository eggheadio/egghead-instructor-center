import React from 'react'
import {Link} from 'react-router-dom'
import {Heading} from 'egghead-ui'
import {Markdown} from 'egghead-ui'
import LessonNextSteps from 'components/LessonNextSteps'
import LessonUploadEdit from 'components/LessonUploadEdit'
import LessonStatus from 'components/LessonStatus'

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
        <div className='mt4 white-80' style={{
          wordBreak: 'break-word',
        }}>
          {lesson.summary
            ? <Markdown>
            {lesson.summary}
          </Markdown>
            : null
          }
        </div>
        <LessonStatus lesson={lesson}/>
        <div className="mt3">
        <LessonUploadEdit lesson={lesson}/>
        </div>
        <div className="mt1">
        <LessonNextSteps lesson={lesson}/>
        </div>
      </div>

    </div>
  )
}
