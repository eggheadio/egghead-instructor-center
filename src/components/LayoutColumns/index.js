import React from 'react'
import {map} from 'lodash'

export default ({items, relativeSizes}) => (
  <div className='flex-l'>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`
          mb4
          ${index < items.length - 1 ? 'mr4-l' : ''}
        `}
        style={{
          flex: relativeSizes
            ? relativeSizes[index]
            : 1
        }}
      >
        {item}
      </div>
    ))}
  </div>
)
