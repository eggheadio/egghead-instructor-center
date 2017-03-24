import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsCard from 'components/InstructorStatsCard'
import InstructorLessonsCard from 'components/InstructorLessonsCard'
import RequestedLessonsCard from 'components/RequestedLessonsCard'
import ProposeLessonCard from 'components/ProposeLessonCard'
import GetPublishedCard from './components/GetPublishedCard'
import HelpCard from './components/HelpCard'
import InstructorRevenueCard from './components/InstructorRevenueCard'

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
    <LayoutColumns items={[
      <RequestedLessonsCard instructor={instructor} />,
      <ProposeLessonCard instructor={instructor} />,
    ]} />
  </div>
)
