import React from 'react'
import {Link} from 'react-router'
import {viewActionText} from '../../../../../../utils/text'
import Heading from '../../../../../../components/Heading'
import Avatar from '../../../../../../components/Avatar'

export default ({instructor}) => (
  <div className='flex items-center'>
    <div className='w3 mr2'>
      <Avatar
        name={instructor.first_name}
        url={instructor.avatar_url}
      />
    </div>
    <div>
      <Heading level='5'>
        {instructor.full_name}
      </Heading>
      <Link 
        to={`/instructors/${instructor.slug}`}
        className='blue'
      >
        {viewActionText}
      </Link>
    </div>
  </div>
)
