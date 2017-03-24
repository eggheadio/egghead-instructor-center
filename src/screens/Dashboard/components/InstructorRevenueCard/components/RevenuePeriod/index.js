import React from 'react'
import formatNumber from 'format-number'
import {Heading} from 'egghead-ui'
import {Text} from 'react-localize'
import IconLabel from 'components/IconLabel'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <Heading level='5'>
      {title}
    </Heading>
    <IconLabel
      iconType='dollar'
      labelText={formatNumber({round: 2, prefix: '$', padRight: 2})(revenue)}
    />
    <IconLabel
      iconType='clock'
      labelText={<Text 
        message='instructorRevenue.subscriberMinutes'
        values={[formatNumber({round: 2})(subscriberMinutes)]} 
      />}
    />
  </div>
)
