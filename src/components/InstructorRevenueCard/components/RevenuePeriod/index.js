import React from 'react'
import {Heading} from 'egghead-ui'
import {Text} from 'react-localize'
import numberFormattingByType from 'utils/numberFormattingByType'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <Heading level='4'>
      {title}
    </Heading>
    <div className='blue b mv3'>
      {numberFormattingByType.money(revenue)}
    </div>
    <div className='base-secondary b'>
      <Text 
        message='instructorRevenue.subscriberMinutes'
        values={[
          numberFormattingByType.general(subscriberMinutes),
        ]} 
      />
    </div>
  </div>
)
