import React from 'react'
import Icon from '../../../../../components/Icon'

const classNameColor = 'green'

export default ({iconType, labelText}) => (
  <div className='flex items-center mv2'>
    <Icon
      type={iconType}
      size='3'
      className={`w2 ${classNameColor}`}
    />
    <span className={`f5 b ml2 ${classNameColor}`}>
      {labelText}
    </span>
  </div>
)
