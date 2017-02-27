import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'egghead-ui'

export default ({
  description,
  actionText,
  action,
}) => (
  <div>
    <div className='i'>
      {description}
    </div>
    {action
      ? <div className='mt3'>
          <Link to={action}>
            <Button type='primary'>
              {actionText}
            </Button>
          </Link>
        </div>
      : null
    }
  </div>
)
