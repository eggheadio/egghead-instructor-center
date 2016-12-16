import React from 'react'
import {Link} from 'react-router'

const containerClassName = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

const linkClassName = {
  info: 'dark-blue',
  error: 'dark-red',
}

export default ({
  isActive,
  type,
  message = '',
  action,
}) => (
  <div
    className={`
      fixed bottom-0 left-0 ma3 br2 pv3 ph4 shadow-1
      ${containerClassName[type]}
    `}
    style={{
      willChange: 'transform, padding',
      transition: 'transform 0.3s, padding 0.3s',
      transform: isActive
        ? 'translateX(0)'
        : 'translateX(-150%)'
    }}
  >
    {message}
    {action
      ? <Link
          to={action.path}
          className={`pl2 ${linkClassName[type]}`}
        >
          {action.description}
        </Link>
      : null
    }
  </div>
)
