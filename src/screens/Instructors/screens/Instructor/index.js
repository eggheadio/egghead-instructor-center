import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsCard from 'components/InstructorStatsCard'
import InstructorLessonsCard from 'components/InstructorLessonsCard'
import InstructorInfoCard from './components/InstructorInfoCard'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <InstructorInfoCard instructor={instructor} />,
      <InstructorStatsCard
        publishedLessons={instructor.published_lessons}
        publishedCourses={instructor.published_courses}
      />,
    ]} />
    <InstructorLessonsCard instructor={instructor} />
  </div>
)
