import React from 'react'
import formatNumber from 'format-number'
import {subscriberMinutesTitleText} from '../../../../../../../utils/text'
import IconLabel from './IconLabel'

export default ({amount}) => (
  <IconLabel
    iconType='subscriber-minutes'
    labelText={`${formatNumber()(amount)} ${subscriberMinutesTitleText}`}
  />
)
