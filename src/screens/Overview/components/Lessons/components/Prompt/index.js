import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'components/Button'

export default ({
  description,
  actionText,
  action,
}) => (
  <div>
    <div className='mb3 i orange'>
      {description}
    </div>
    {action
      ? <Link to={action}>
          <Button>
            {actionText}
          </Button>
        </Link>
      : null
    }
  </div>
)
