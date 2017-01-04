import React from 'react'
import {Link} from 'react-router'
import Button from '../../../../../../../../components/Button'

export default ({instructorId, description}) => (
  <div>
    <div className='mv3 i orange'>
      {description}. Claim or submit a topic to get started!
    </div>
    <Link to={`/instructors/${instructorId}/topics`}>
      <Button>
        Claim a topic
      </Button>
    </Link>
  </div>
)
