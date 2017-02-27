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
    {action
      ? <div className='mt3'>
          {startsWith(action, '/') 
            ? <Link to={action}>
                <Button type='primary'>
                  {actionText}
                </Button>
              </Link>
            : <a href={action}>
                <Button type='primary'>
                  {actionText}
                </Button>
              </a>
          }
        </div>
      : null
    }
  </div>
)
