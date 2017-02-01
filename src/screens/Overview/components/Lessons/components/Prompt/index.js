import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'components/Button'

export default ({
  instructor,
  description,
  action,
  route,
}) => (
  <div>
    <div className='mb3 i orange'>
      {description}
    </div>
    <Link to={`/instructors/${instructor.slug}${route}`}>
      <Button>
        {action}
      </Button>
    </Link>
  </div>
)
