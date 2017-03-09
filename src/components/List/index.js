import React from 'react'
import {map} from 'lodash'

export default ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className='pa4 bb b--light-gray'
      >
        {item}
      </div>
    ))}
  </div>
)
