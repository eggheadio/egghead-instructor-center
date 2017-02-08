import React from 'react'
import {Link} from 'react-router-dom'
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

  const {technology, instructor} = lesson

  const items = [
    {
      title: titleTitleText,
      children: lesson.title,
    },
    {
      title: instructorTitleText,
      children: (
        <Link
          to={`/instructors/${instructor.slug}`}
          className='flex items-center blue'
        >
          <div className='mr2'>
            <Avatar
              name={instructor.first_name}
              url={instructor.avatar_url}
              size={2}
            />
          </div>
          {instructor.full_name}
        </Link>
      ),
    },
    {
      title: technologyTitleText,
      children: (
        <div className='flex items-center'>
          <img
            src={technology.logo_http_url}
            alt={technology.label}
            className='mw2 mr2'
          />
          {technology.label}
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
