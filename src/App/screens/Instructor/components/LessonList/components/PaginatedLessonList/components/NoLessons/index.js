import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Button from '../../../../../../../../components/Button'

const NoLessons = ({instructorId}) => (
  <div>
    No lessons to show. You can claim a topic to get started.
    <Link to={`/instructors/${instructorId}/topics`}>
      <Button>
        Claim a topic
      </Button>
    </Link>
  </div>
)

export default connect(
  ({instructorScreen}) => ({
    instructorId: instructorScreen.instructor.id,
  }),
  null,
)(NoLessons)
