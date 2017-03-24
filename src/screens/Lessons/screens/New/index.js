import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import RequestedLessonsCard from 'components/RequestedLessonsCard'
import ProposeLessonCard from 'components/ProposeLessonCard'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <RequestedLessonsCard instructor={instructor} />,
      <ProposeLessonCard instructor={instructor} />,
    ]} />
  </div>
)
