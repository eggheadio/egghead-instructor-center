import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import RequestedCard from 'components/RequestedCard'
import ProposeCard from 'components/ProposeCard'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <RequestedCard instructor={instructor} />,
      <ProposeCard instructor={instructor} />,
    ]} />
  </div>
)
