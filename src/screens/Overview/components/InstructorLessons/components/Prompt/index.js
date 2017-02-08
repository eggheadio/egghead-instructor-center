import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'components/Button'

export default ({
  description,
  actionText,
  action,
}) => (
  <div>
    <div className='i orange'>
      {description}
    </div>
    {action
      ? <div className='mt3'>
          <Link to={action}>
            <Button>
              {actionText}
            </Button>
          </Link>
        </div>
      : null
    }
  </div>
)
