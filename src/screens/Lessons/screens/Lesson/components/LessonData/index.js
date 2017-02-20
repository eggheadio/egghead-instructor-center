import React from 'react'
import {map, size} from 'lodash'
import {Heading, Button} from 'egghead-ui'
import {
  titleTitleText,
  instructorTitleText,
  technologyTitleText,
  summaryTitleText,
  videoTitleText,
  uploadVideoTitleText,
  noVideoDescriptionText,
  editLessonTitleText,
} from 'utils/text'
import Anchor from 'components/Anchor'
import Avatar from 'components/Avatar'
import WistiaVideo from './components/WistiaVideo'

export default ({instructor, lesson}) => {

  const isInstructorsOwnLesson = instructor.slug === lesson.instructor.slug
  const hasVideo = lesson.wistia_id
  const temporaryLessonEditUrl = `${lesson.lesson_http_url}/edit`
  const items = [
    {
      title: titleTitleText,
      children: lesson.title,
    },
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
      children: lesson.summary,
    },
    {
      title: videoTitleText,
      children: hasVideo
        ? <WistiaVideo wistiaId={lesson.wistia_id} />
        : noVideoDescriptionText
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
            <Heading level='4'>
              {item.title}
            </Heading>
            <div>
              {item.children}
            </div>
          </div>
        ))}
      </div>

      {isInstructorsOwnLesson 
        ? <div className='mb3'>
            <Anchor url={temporaryLessonEditUrl}>
              <Button type='primary'>
                {hasVideo ? editLessonTitleText : `${editLessonTitleText} & ${uploadVideoTitleText}`}
              </Button>
            </Anchor>
          </div>
        : null
      }
    </div>
  )
}
