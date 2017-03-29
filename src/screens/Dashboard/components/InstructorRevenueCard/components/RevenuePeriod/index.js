import React from 'react'
import formatNumber from 'format-number'
import {Heading} from 'egghead-ui'
import {Text} from 'react-localize'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <Heading level='4'>
      {title}
    </Heading>
    <div className='blue b mv3'>
      {formatNumber({round: 2, prefix: '$', padRight: 2})(revenue)}
    </div>
    <div className='base-secondary b'>
      <Text 
        message='instructorRevenue.subscriberMinutes'
        values={[formatNumber({round: 2})(subscriberMinutes)]} 
      />
    </div>
  </div>
)
