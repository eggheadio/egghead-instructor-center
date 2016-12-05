import React from 'react'

const typeSpecificClassNames = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

export default ({
  children,
  type = 'info',
}) => (
  <div className={`pa3 br2 ${typeSpecificClassNames[type]}`}>
    {children}
  </div>
)
