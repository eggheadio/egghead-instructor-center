import React from 'react'

const types = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

export default ({
  isActive,
  type,
  message = '',
}) => (
  <div
    className={`
      fixed bottom-0 left-0 ma3 br2 pv3 ph4 shadow-1
      ${types[type]}
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
  </div>
)
