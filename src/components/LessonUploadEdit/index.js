import React from 'react'
import {
  uploadVideoTitleText,
  editLessonTitleText,
  replaceVideoTitleText,
} from 'utils/text'
import Anchor from 'components/Anchor'
import {Button} from 'egghead-ui'

export default function LessonUploadEdit ({lesson}) {
  return (
    <span>
    <div className='flex mb3'>
    {
      lesson.edit_lesson_http_url ?
        <div className="pa1">
          <Anchor url={lesson.edit_lesson_http_url}>
            <Button color='blue' size='extra-small'>
              {editLessonTitleText}
            </Button>
          </Anchor>
        </div>
        : null
    }
      {
        lesson.upload_lesson_http_url ?
          <div className="pa1">
            <Anchor url={lesson.upload_lesson_http_url}>
              <Button color='blue' size='extra-small'>
                {`${lesson.wistia_id ? replaceVideoTitleText : uploadVideoTitleText} Video`}
              </Button>
            </Anchor>
          </div>
          : null
      }
    </div>
  </span>
  )
}