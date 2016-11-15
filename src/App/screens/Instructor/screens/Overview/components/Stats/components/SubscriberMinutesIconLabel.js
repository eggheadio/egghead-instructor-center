import React from 'react'
import formatNumber from 'format-number'
import IconLabel from './IconLabel'

export default ({amount}) => (
  <IconLabel
    iconType='subscriber-minutes'
    labelText={`${formatNumber()(amount)} subscriber minutes`}
  />
)
