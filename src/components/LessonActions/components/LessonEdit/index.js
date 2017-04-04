import React from 'react'
import {Maybe, Button} from 'egghead-ui'
import {Text} from 'react-localize'
import Anchor from 'components/Anchor'

export default ({lesson}) => (
  <div className='flex flex-wrap'>
    <Maybe condition={Boolean(lesson.edit_lesson_http_url)}>
      <div className='pr2 pb2'>
        <Anchor url={lesson.edit_lesson_http_url}>
          <Button 
            color='base'
            size='extra-small'
          >
            <Text message='lessonEdit.edit' />
          </Button>
        </Anchor>
      </div>
    </Maybe>
    <Maybe condition={Boolean(lesson.upload_lesson_http_url)}>
      <div className='pb2'>
        <Anchor url={lesson.upload_lesson_http_url}>
          <Button
            color='base'
            size='extra-small'
          >
            {lesson.wistia_id
              ? <Text message='lessonEdit.replaceVideo' />
              : <Text message='lessonEdit.uploadVideo' />
            }
          </Button>
        </Anchor>
      </div>
    </Maybe>
  </div>
)
