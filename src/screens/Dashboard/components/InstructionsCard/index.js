import React from 'react'
import {instructionsTitleText} from 'utils/text'
import Card from 'components/Card'
import Prompt from 'components/Prompt'

export default ({
  condition,
  instructor,
  description,
  actionText,
  action,
}) => condition
  ? <Card title={instructionsTitleText}>
      <div className='pa4'>
        Hey {instructor.first_name},
        <Prompt
          description={description}
          actionText={actionText}
          action={action}
        />
      </div>
    </Card>
  : null
