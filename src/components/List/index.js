import React from 'react'
import {map} from 'lodash'

export default ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`pa4 ${index < items.length - 1 ? 'bb b--light-gray' : ''}`}
      >
        {item}
      </div>
    ))}
  </div>
)
