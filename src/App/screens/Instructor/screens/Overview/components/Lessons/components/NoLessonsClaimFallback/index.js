import React from 'react'
import {Link} from 'react-router'
import Button from '../../../../../../../../components/Button'

export default ({instructorId, description}) => (
  <div>
    <div className='mv3 i orange'>
      {description}. Claim a new lesson to get started!
    </div>
    <Link to={`/instructors/${instructorId}/new-lessons`}>
      <Button>
        New lessons
      </Button>
    </Link>
  </div>
)
