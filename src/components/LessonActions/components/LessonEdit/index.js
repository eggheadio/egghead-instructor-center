import React from 'react'
import {Button} from 'egghead-ui'
import {Text} from 'react-localize'
import Anchor from 'components/Anchor'

export default ({lesson}) => (
  <div className='flex'>
    {
      lesson.edit_lesson_http_url
        ? <div className='pa1'>
            <Anchor url={lesson.edit_lesson_http_url}>
              <Button size='extra-small'>
                <Text message='lessonActions.edit' />
              </Button>
            </Anchor>
          </div>
        : null
    }
    {
      lesson.upload_lesson_http_url 
        ? <div className='pa1'>
            <Anchor url={lesson.upload_lesson_http_url}>
              <Button size='extra-small'>
                {`${lesson.wistia_id ? replaceVideoTitleText : uploadVideoTitleText} Video`}
              </Button>
            </Anchor>
          </div>
        : null
    }
  </div>
)
