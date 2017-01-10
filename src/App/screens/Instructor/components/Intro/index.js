import React from 'react'
import {greetingTitleText} from '../../../../utils/text'
import Avatar from '../Avatar'

export default ({instructor}) => (
  <div className='flex items-center'>
    <div className='w3 mr2'>
      <Avatar
        name={instructor.first_name}
        url={instructor.avatar_url}
      />
    </div>
    <div className='f4 b gray i mt2'>
      {greetingTitleText} {instructor.first_name}!
    </div>
  </div>
)
