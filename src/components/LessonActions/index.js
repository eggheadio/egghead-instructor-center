import React from 'react'
import {map, keys} from 'lodash'
import {Text} from 'react-localize'
import {Maybe} from 'egghead-ui'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'utils/lessonStates'
import WrappedRequest from 'components/WrappedRequest'
import LessonAction from './components/LessonAction'

const stateVerbs = keys(lessonStateVerbToPastTense)

export default ({lesson, requestLesson, requestCurrentPage}) => (
  <div className='flex flex-wrap h-100'>

    {lesson.upload_lesson_http_url
      ? <LessonAction
          actionText={lesson.wistia_id
            ? <Text message='lessonEdit.replaceVideo' />
            : <Text message='lessonEdit.uploadVideo' />
          }
          iconType='upload'
          color='blue'
          url={lesson.upload_lesson_http_url}
        />
      : null
    }

    {lesson.edit_lesson_http_url
      ? <LessonAction
          actionText={<Text message='lessonEdit.edit' />}
          iconType='edit'
          color='orange'
          url={lesson.edit_lesson_http_url}
        />
      : null
    }

    {map(stateVerbs, (stateVerb, index) => {
      const stateVerbUrl = lesson[`${stateVerb}_url`]
      return (
        <Maybe 
          key={stateVerb}
          condition={Boolean(stateVerbUrl)}
        >
          <WrappedRequest
            lazy
            method='post'
            url={stateVerbUrl}
            onResponse={requestLesson || requestCurrentPage}
          >
            {({request}) => {
              const details = detailsByLessonState[lessonStateVerbToPastTense[stateVerb]]
              return (
                <LessonAction
                  actionText={details.action}
                  iconType={details.icon}
                  color={details.color}
                  onClick={() => request()}
                />
              )
            }}
          </WrappedRequest>
        </Maybe>
      )
    })}

  </div>
)
