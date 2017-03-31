import React from 'react'
import {Text} from 'react-localize'
import numberFormattingByType from 'utils/numberFormattingByType'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <div className='f5 mb3'>
      {title}
    </div>
    <div className='blue b mb1'>
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
