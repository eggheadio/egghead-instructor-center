import React from 'react'
import {map, size} from 'lodash'
import {Heading, Button} from 'egghead-ui'
import {
  instructorTitleText,
  technologyTitleText,
  summaryTitleText,
  videoTitleText,
  uploadVideoTitleText,
  editLessonTitleText,
  replaceVideoTitleText,
} from 'utils/text'
import Anchor from 'components/Anchor'
import Avatar from 'components/Avatar'
import {Markdown} from 'egghead-ui'

export default ({instructor, lesson}) => {

  const hasVideo = lesson.wistia_id

  const items = [
    {
      title: instructorTitleText,
      children: (
        <div className='flex items-center'>
          <div className='mr2'>
            <Avatar
              name={lesson.instructor.first_name}
              url={lesson.instructor.avatar_url}
              size={2}
            />
          </div>
          {lesson.instructor.full_name}
        </div>
      ),
    },
    {
      title: technologyTitleText,
      children: (
        <div className='flex items-center'>
          <img
            src={lesson.technology.logo_http_url}
            alt={lesson.technology.label}
            className='mw2 mr2'
          />
          {lesson.technology.label}
        </div>
      ),
    },
    {
      title: summaryTitleText,
      children: (
        <Markdown>
          {lesson.summary}
        </Markdown>
      ),
    },
  ]

  return (
    <div>

      <div>
        {map(items, (item, index) => (
          <div 
            key={index}
            className={`${index < (size(items) - 1) ? 'bb' : ''} pb3 mb3 b--gray`}
          >
            <h4 className='mt0 bold f4 mb2 white-70'>
              {item.title}
            </h4>
            <div>
              {item.children}
            </div>
          </div>
        ))}
      </div>

      {lesson.edit_lesson_http_url
        ? <div className='mb3'>
            <Anchor url={lesson.edit_lesson_http_url} className='ma1'>
              <Button color='blue' size='extra-small'>
                {hasVideo ? editLessonTitleText : `${editLessonTitleText}`}
              </Button>
            </Anchor>
            <Anchor url={lesson.upload_lesson_http_url} className='ma1'>
              <Button color='blue' size='extra-small'>
                {hasVideo ? replaceVideoTitleText : uploadVideoTitleText} Video
              </Button>
            </Anchor>
          </div>
        : null
      }
    </div>
  )
}
