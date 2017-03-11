import React from 'react'
import {Icon} from 'egghead-ui'

const classNameColor = 'gray'

export default ({iconType, labelText}) => (
  <div className='flex items-center'>
    <div className='w2'>
      <Icon
        type={iconType}
        color={classNameColor}
      />
    </div>
    <span className={`f5 b ml1 ${classNameColor}`}>
      {labelText}
    </span>
  </div>
)
