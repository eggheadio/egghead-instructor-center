import React from 'react'
import {map, size} from 'lodash'
import {
  titleTitleText,
  instructorTitleText,
  technologyTitleText,
  summaryTitleText,
  videoTitleText,
} from 'utils/text'
import Heading from 'components/Heading'
import Avatar from 'components/Avatar'
import WistiaVideo from './components/WistiaVideo'

export default ({lesson}) => {

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
      children: lesson.wistia_id
        ? <WistiaVideo wistiaId={lesson.wistia_id} />
        : null
    },
  ]

  return (
    <div>
      {map(items, (item, index) => (
        <div 
          key={index}
          className={`${index < (size(items) - 1) ? 'bb' : ''} pb3 mb3 b--black-30`}
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
  )
}
