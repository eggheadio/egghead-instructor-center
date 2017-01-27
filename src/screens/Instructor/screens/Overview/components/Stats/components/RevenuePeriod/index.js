import React from 'react'
import formatNumber from 'format-number'
import {subscriberMinutesLabelText} from 'utils/text'
import Heading from 'components/Heading'
import IconLabel from '../IconLabel'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <Heading level='4'>
      {title}
    </Heading>
    <IconLabel
      iconType='revenue'
      labelText={formatNumber({round: 2, prefix: '$'})(revenue)}
    />
    <IconLabel
      iconType='subscriber-minutes'
      labelText={`${formatNumber({round: 2})(subscriberMinutes)} ${subscriberMinutesLabelText}`}
    />
  </div>
)
