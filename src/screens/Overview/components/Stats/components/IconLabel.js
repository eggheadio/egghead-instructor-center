import React from 'react'
import Icon from 'components/Icon'

const classNameColor = 'green'

export default ({iconType, labelText}) => (
  <div className='flex items-center mv1'>
    <Icon
      type={iconType}
      size='2'
      className={`w2 ${classNameColor}`}
    />
    <span className={`f5 b ml1 ${classNameColor}`}>
      {labelText}
    </span>
  </div>
)
