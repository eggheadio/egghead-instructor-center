import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsWidget from 'components/InstructorStatsWidget'
import InstructorRevenueWidget from 'components/InstructorRevenueWidget'
import InstructorLessonsWidget from 'components/InstructorLessonsWidget'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <InstructorStatsWidget
        publishedLessons={instructor.published_lessons}
        publishedCourses={instructor.published_courses}
      />,
      <InstructorRevenueWidget revenueUrl={instructor.revenueUrl} />,
    ]} />
    <InstructorLessonsWidget instructor={instructor} />
  </div>
)
