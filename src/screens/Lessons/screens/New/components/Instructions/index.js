import React from 'react'
import Prompt from 'components/Prompt'

export default ({instructor, description, actionText, action}) => (
  <div className='i pa3 bg-light-navy mb4'>
    Hey {instructor.first_name},
    <Prompt
      description={description}
      actionText={actionText}
      action={action}
    />
  </div>
)
