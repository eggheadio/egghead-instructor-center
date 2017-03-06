import React from 'react'
import {Link} from 'react-router-dom'
import {startsWith} from 'lodash'
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
    <div className='mt3'>
      {startsWith(action, '/') 
        ? <Link to={action}>
            <Button color='blue' size="extra-small">
              {actionText}
            </Button>
          </Link>
        : <a href={action}>
            <Button color='blue' size="extra-small">
              {actionText}
            </Button>
          </a>
      }
    </div>
  </div>
)
