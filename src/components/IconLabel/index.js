import React from 'react'
import {Icon} from 'egghead-ui'

export default ({iconType, labelText, color = 'dark-gray'}) => (
  <div className='flex items-center'>
    <div className='w2'>
      <Icon
        type={iconType}
        color={color}
      />
    </div>
    <span className={`f5 ml1 ${color}`}>
      {labelText}
    </span>
  </div>
)
