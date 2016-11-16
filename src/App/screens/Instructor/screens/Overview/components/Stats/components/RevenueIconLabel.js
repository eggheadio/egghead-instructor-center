import React from 'react'
import formatNumber from 'format-number'
import IconLabel from './IconLabel'

export default ({amount}) => (
  <IconLabel
    iconType='revenue'
    labelText={`${formatNumber({prefix: '$'})(amount)} revenue`}
  />
)
