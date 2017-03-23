import React from 'react'
import {map, compact} from 'lodash'
import {Card, Markdown, Heading, List} from 'egghead-ui'
import {
  lessonStateTitleText,
  lessonActionsTitleText,
  instructorTitleText,
  technologyTitleText,
  summaryTitleText,
} from 'utils/text'
import LessonState from 'components/LessonState'
import LessonActions from 'components/LessonActions'
import Avatar from 'components/Avatar'
import WistiaVideo from './components/WistiaVideo'

export default ({lesson, requestLesson}) => {

  const items = compact([
    {
      title: lesson.title,
      children: (
        <WistiaVideo wistiaId={lesson.wistia_id} />
      ),
    },
    {
      title: lessonStateTitleText,
      children: (
        <LessonState lesson={lesson} />
      ),
    },
    {
      title: lessonActionsTitleText,
      children: (
        <LessonActions 
          lesson={lesson} 
          requestLesson={requestLesson}
        />
      ),
    },
    lesson.state === 'requested' 
      ? null
      : {
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
  ])

  return (
    <Card>
      <List items={map(items, (item, index) => (
        <div>
          <Heading level='5'>
            {item.title}
          </Heading>
          <div>
            {item.children}
          </div>
        </div>
      ))} />
    </Card>
  )
}
