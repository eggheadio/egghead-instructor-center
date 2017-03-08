import React from 'react'
import formatNumber from 'format-number'
import {Heading} from 'egghead-ui'
import {subscriberMinutesLabelText} from 'utils/text'
import IconLabel from '../IconLabel'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <Heading level='4'>
      {title}
    </Heading>
    <IconLabel
      iconType='dollar'
      labelText={formatNumber({round: 2, prefix: '$', padRight: 2})(revenue)}
    />
    <IconLabel
      iconType='clock'
      labelText={`${formatNumber({round: 2})(subscriberMinutes)} ${subscriberMinutesLabelText}`}
    />
  </div>
)
