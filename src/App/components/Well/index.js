import React from 'react'

export const types = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

export default ({
  children,
  type = 'info',
}) => (
  <div className={`pa3 br2 ${types[type]}`}>
    {children}
  </div>
)
