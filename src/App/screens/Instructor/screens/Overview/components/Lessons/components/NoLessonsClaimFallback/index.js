import React from 'react'
import {Link} from 'react-router'
import {claimDescriptionText, newLessonsTitleText} from '../../../../../../../../utils/text'
import Button from '../../../../../../../../components/Button'

export default ({instructorId, description}) => (
  <div>
    <div className='mv3 i orange'>
      {description}. {claimDescriptionText}
    </div>
    <Link to={`/instructors/${instructorId}/new-lessons`}>
      <Button>
        {newLessonsTitleText}
      </Button>
    </Link>
  </div>
)
