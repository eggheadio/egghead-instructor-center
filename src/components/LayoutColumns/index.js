import React from 'react'
import {map} from 'lodash'

export default ({items}) => (
  <div className='flex'>
    {map(items, (item, index) => (
      <div className={`w-100 ${index < items.length - 1 ? 'mr4' : ''}`}>
        {item}
      </div>
    ))}
  </div>
)
