import React from 'react'

const typeSpecificClassNames = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

export default ({
  type = 'info',
  description,
}) => (
  description
    ? <div className={`pa3 br2 ${typeSpecificClassNames[type]}`}>
        {description}
      </div>
    : null
)
