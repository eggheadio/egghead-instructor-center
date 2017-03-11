import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import RequestedWidget from 'components/RequestedWidget'
import ProposeWidget from 'components/ProposeWidget'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <RequestedWidget instructor={instructor} />,
      <ProposeWidget instructor={instructor} />,
    ]} />
  </div>
)
