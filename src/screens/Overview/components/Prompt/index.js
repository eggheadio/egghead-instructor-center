import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Button from 'components/Button'

const Prompt = ({
  instructorId,
  description,
  action,
  route,
}) => (
  <div>
    <div className='mb3 i orange'>
      {description}
    </div>
    <Link to={`/instructors/${instructorId}${route}`}>
      <Button>
        {action}
      </Button>
    </Link>
  </div>
)

export default connect(
  ({appScreen}) => ({
    instructorId: appScreen.instructor.slug,
  }),
  null
)(Prompt)
