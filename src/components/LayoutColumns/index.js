import React from 'react'
import {map} from 'lodash'

export default ({items}) => (
  <div className='flex-ns'>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`w-100-ns ${index < items.length - 1 ? 'mr4-ns' : ''}`}
      >
        {item}
      </div>
    ))}
  </div>
)
