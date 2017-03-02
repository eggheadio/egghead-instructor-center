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
      iconType='revenue'
      labelText={formatNumber({round: 2, prefix: '$', padRight: 2})(revenue)}
    />
    <IconLabel
      iconType='subscriber-minutes'
      labelText={`${formatNumber({round: 2})(subscriberMinutes)} ${subscriberMinutesLabelText}`}
    />
  </div>
)
