import React from 'react'
import {
  newLessonsInstructionsDescriptionText,
  newLessonsInstructionsActionText,
} from 'utils/text'
import {newLessonsInfoUrl} from 'utils/urls'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsCard from 'components/InstructorStatsCard'
import InstructorLessonsCard from 'components/InstructorLessonsCard'
import RequestedCard from 'components/RequestedCard'
import ProposeCard from 'components/ProposeCard'
import GetPublishedCard from './components/GetPublishedCard'
import HelpCard from './components/HelpCard'
import InstructorRevenueCard from './components/InstructorRevenueCard'
import InstructionsCard from './components/InstructionsCard'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <GetPublishedCard instructor={instructor} />,
      <HelpCard publishedLessons={instructor.published_lessons} />,
    ]} />
    <LayoutColumns items={[
      <InstructorStatsCard
        publishedLessons={instructor.published_lessons}
        publishedCourses={instructor.published_courses}
      />,
      <InstructorRevenueCard revenueUrl={instructor.revenue_url} />,
    ]} />
    <InstructorLessonsCard instructor={instructor} />
    <InstructionsCard
      condition={instructor.published_lessons === 0 && instructor.pending_lessons === 0}
      instructor={instructor}
      description={newLessonsInstructionsDescriptionText}
      actionText={newLessonsInstructionsActionText}
      action={newLessonsInfoUrl}
    />
    <LayoutColumns items={[
      <RequestedCard instructor={instructor} />,
      <ProposeCard instructor={instructor} />,
    ]} />
  </div>
)
